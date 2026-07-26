import type { Metadata } from "next";
import { IMAGES } from "./images";
import { SITE_NAME, SITE_NAME_LONG, SITE_URL } from "./site";

const TITLE_SUFFIX = "The Enclave Milton Sundial Homes | Sundial Homes";

type PageMeta = {
  path?: string;
  pageTitle: string;
  description: string;
  ogImage?: string;
  keywords?: string[];
};

export const PRIMARY_KEYWORDS = [
  "The Enclave Milton Sundial Homes",
  "Sundial Homes The Enclave",
  "Sundial Homes Milton",
  "The Enclave Milton",
  "The Enclave Milton Townhomes",
  "The Enclave",
  "Enclave Milton",
  "Enclave Milton townhomes",
  "freehold townhomes Milton",
  "Britannia Road Milton new homes",
  "Milton townhomes for sale",
] as const;

export function buildMetadata({
  path = "",
  pageTitle,
  description,
  ogImage = IMAGES.hero,
  keywords = [...PRIMARY_KEYWORDS],
}: PageMeta): Metadata {
  const fullTitle = `${pageTitle} | ${TITLE_SUFFIX}`;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [...keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_CA",
      url,
      siteName: SITE_NAME_LONG,
      title: fullTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${SITE_NAME_LONG} — ${SITE_NAME} Townhomes` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export const defaultDescription =
  "The Enclave Milton Sundial Homes — freehold townhomes by Sundial Homes on Britannia Road between James Snow Parkway and Fourth Line. Explore Village & Park collections and register for floor plans and community updates.";

export const homePageTitle = "The Enclave Milton Sundial Homes | Freehold Townhomes";
