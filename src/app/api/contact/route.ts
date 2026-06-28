import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/core/contact/schema";
import { site } from "@/core/config/site";

export const runtime = "nodejs";

// Jednoduchý in-memory rate limit (na inštanciu). Pre produkčný hard limit
// odporúčam doplniť napr. Upstash Redis.
const hits = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "anonymous";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Príliš veľa pokusov. Skúste to o chvíľu." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Neplatná požiadavka." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Skontrolujte, prosím, vyplnené polia.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  const data = parsed.data;

  // Honeypot — ak je vyplnený, tvárime sa, že je všetko OK (zmätieme bota).
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.contact.email;
  // Pozn.: 'from' musí byť doména overená v Resend.
  const from = process.env.CONTACT_FROM_EMAIL || "MatewLogic <onboarding@resend.dev>";

  if (!apiKey) {
    // Bez kľúča nepadneme — zalogujeme a vrátime zrozumiteľnú chybu.
    console.warn(
      "[contact] RESEND_API_KEY nie je nastavený — e-mail nebol odoslaný.",
      { from: data.email, name: data.name }
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "Formulár zatiaľ nie je prepojený s e-mailom. Napíšte nám prosím priamo na " +
          to,
      },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const html = `
      <div style="font-family:Inter,Arial,sans-serif;color:#0a0a0b;line-height:1.6">
        <h2 style="margin:0 0 16px">Nový dopyt z webu</h2>
        <p><strong>Meno:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(data.email)}</p>
        ${data.company ? `<p><strong>Firma:</strong> ${escapeHtml(data.company)}</p>` : ""}
        ${data.service ? `<p><strong>Služba:</strong> ${escapeHtml(data.service)}</p>` : ""}
        <p><strong>Správa:</strong></p>
        <p style="white-space:pre-wrap;background:#f5f5f5;padding:12px;border-radius:8px">${escapeHtml(
          data.message
        )}</p>
      </div>`;

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `Nový dopyt z webu — ${data.name}`,
      html,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "E-mail sa nepodarilo odoslať. Skúste to prosím neskôr." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Nastala neočakávaná chyba. Skúste to prosím neskôr." },
      { status: 500 }
    );
  }
}
