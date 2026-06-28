import type { Metadata } from "next";
import LegalPage from "@/presentation/legal/legal-page";

export const metadata: Metadata = {
  title: "Zásady používania cookies",
  description:
    "Informácie o tom, aké cookies používa web MatewLogic a ako môžete spravovať svoj súhlas.",
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPage
      title="Zásady používania cookies"
      intro="Táto stránka vysvetľuje, čo sú cookies, aké typy používame a ako môžete kedykoľvek zmeniť svoje nastavenia."
    >
      <h2>1. Čo sú cookies</h2>
      <p>
        Cookies sú malé textové súbory, ktoré sa pri návšteve webu ukladajú do
        vášho zariadenia. Pomáhajú webu zapamätať si vaše nastavenia a rozumieť
        tomu, ako web používate. Niektoré sú nevyhnutné, iné používame iba s
        vaším súhlasom.
      </p>

      <h2>2. Aké cookies používame</h2>
      <h3>Nevyhnutné cookies</h3>
      <p>
        Sú potrebné na základné fungovanie webu (napr. zapamätanie vašej voľby v
        lište cookies). Bez nich web nefunguje správne, preto sa nedajú vypnúť.
        Spracúvame ich na základe nášho oprávneného záujmu.
      </p>
      <table>
        <thead>
          <tr>
            <th>Názov</th>
            <th>Účel</th>
            <th>Platnosť</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ml_cookie_consent_v1</td>
            <td>Uchováva vašu voľbu súhlasu s cookies</td>
            <td>trvalé (do vymazania)</td>
          </tr>
          <tr>
            <td>ml_intro_seen</td>
            <td>Zapamätá si zobrazenie úvodnej animácie</td>
            <td>počas relácie (session)</td>
          </tr>
        </tbody>
      </table>

      <h3>Analytické cookies</h3>
      <p>
        Pomáhajú nám pochopiť, ako návštevníci používajú web, aby sme ho mohli
        zlepšovať. Aktivujú sa iba s vaším súhlasom. (Pozn.: konkrétny
        analytický nástroj – napr. Google Analytics / Vercel Analytics – bude
        doplnený podľa nasadenia.)
      </p>

      <h3>Marketingové cookies</h3>
      <p>
        Umožňujú merať efektivitu reklamy a zobrazovať relevantnejší obsah.
        Aktivujú sa iba s vaším súhlasom.
      </p>

      <h2>3. Správa súhlasu</h2>
      <p>
        Pri prvej návšteve vás požiadame o súhlas. Svoje rozhodnutie môžete
        kedykoľvek zmeniť kliknutím na „<strong>Nastavenia cookies</strong>“ v
        pätičke webu. Cookies môžete spravovať aj priamo vo svojom prehliadači,
        kde ich môžete blokovať alebo vymazať.
      </p>

      <h2>4. Ďalšie informácie</h2>
      <p>
        Spracúvanie osobných údajov podrobnejšie popisujeme v{" "}
        <a href="/ochrana-osobnych-udajov">Zásadách ochrany osobných údajov</a>.
      </p>
    </LegalPage>
  );
}
