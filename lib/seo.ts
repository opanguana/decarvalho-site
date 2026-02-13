import type { Metadata } from "next";
import { getSite } from "@/lib/content";

type BuildMetaInput = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
};

function absoluteUrl(pathOrUrl: string) {
  const { baseUrl } = getSite();
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl;
  return `${baseUrl.replace(/\/$/, "")}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

export function buildMetadata(input: BuildMetaInput): Metadata {
  const site = getSite();
  const canonical = absoluteUrl(input.path);
  const ogImage = absoluteUrl(input.ogImage ?? site.defaultOgImage);

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical },
    openGraph: {
      title: input.ogTitle ?? input.title,
      description: input.ogDescription ?? input.description,
      url: canonical,
      siteName: site.orgName,
      type: "website",
      images: [{ url: ogImage }]
    },
    twitter: {
      card: "summary_large_image",
      title: input.ogTitle ?? input.title,
      description: input.ogDescription ?? input.description,
      images: [ogImage]
    }
  };
}
