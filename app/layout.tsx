import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSite } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const site = getSite();

export const metadata: Metadata = buildMetadata({
  title: site.orgName,
  description: site.description,
  path: "/"
});

export default function RootLayout(props: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.orgName,
    legalName: site.orgLegalName,
    url: site.baseUrl,
    description: site.description,
    email: site.contact.email,
    telephone: site.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Maputo",
      addressCountry: "MZ"
    },
    sameAs: Object.values(site.social).filter(Boolean)
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Header />
        {props.children}
        <Footer />
      </body>
    </html>
  );
}
