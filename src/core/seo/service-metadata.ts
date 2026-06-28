import type { Metadata } from "next";
import { site } from "@/core/config/site";
import type { ServicePageContent } from "@/core/config/services-content";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || site.url;

export function buildServiceMetadata(c: ServicePageContent): Metadata {
  const url = `${baseUrl}/sluzby/${c.slug}`;
  return {
    title: c.seo.title,
    description: c.seo.description,
    keywords: c.seo.keywords,
    alternates: { canonical: `/sluzby/${c.slug}` },
    openGraph: {
      type: "website",
      locale: site.locale,
      url,
      siteName: site.name,
      title: c.seo.title,
      description: c.seo.description,
    },
    twitter: {
      card: "summary_large_image",
      title: c.seo.title,
      description: c.seo.description,
    },
  };
}

/** Structured data: Service + FAQPage + BreadcrumbList */
export function buildServiceJsonLd(c: ServicePageContent) {
  const url = `${baseUrl}/sluzby/${c.slug}`;

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.eyebrow,
    serviceType: c.eyebrow,
    description: c.seo.description,
    url,
    areaServed: ["SK", "CZ"],
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      url: site.url,
      email: site.contact.email,
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Domov", item: site.url },
      { "@type": "ListItem", position: 2, name: "Služby", item: `${site.url}/#sluzby` },
      { "@type": "ListItem", position: 3, name: c.eyebrow, item: url },
    ],
  };

  return [service, faq, breadcrumb];
}
