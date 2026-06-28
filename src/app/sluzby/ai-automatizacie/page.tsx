import type { Metadata } from "next";
import ServicePage from "@/presentation/service/service-page";
import { servicePages } from "@/core/config/services-content";
import {
  buildServiceMetadata,
  buildServiceJsonLd,
} from "@/core/seo/service-metadata";

const data = servicePages.ai;

export const metadata: Metadata = buildServiceMetadata(data);

export default function Page() {
  const jsonLd = buildServiceJsonLd(data);
  return (
    <>
      {jsonLd.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
      <ServicePage data={data} />
    </>
  );
}
