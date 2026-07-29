import type { Metadata } from "next";
import { IMAGES } from "./images";
import { SITE_NAME, SITE_NAME_LONG, SITE_URL, STARTING_PRICE_DISPLAY } from "./site";

const TITLE_SUFFIX = "The Enclave Milton | Sundial Homes";

type PageMeta = {
  path?: string;
  pageTitle: string;
  description: string;
  ogImage?: string;
  keywords?: string[];
  /** When true, pageTitle is used as the full document title (no suffix). */
  absoluteTitle?: boolean;
};

export const PRIMARY_KEYWORDS = [
  "The Enclave Milton",
  "The Enclave Milton Sundial Homes",
  "The Enclave Milton Townhomes",
  "Sundial Homes The Enclave",
  "Sundial Homes Milton",
  "The Enclave",
  "Enclave Milton",
  "Enclave Milton townhomes",
  "freehold townhomes Milton",
  "Britannia Road Milton new homes",
  "Milton townhomes for sale",
  "The Enclave Milton from $599,990",
] as const;

export function buildMetadata({
  path = "",
  pageTitle,
  description,
  ogImage = IMAGES.hero,
  keywords = [...PRIMARY_KEYWORDS],
  absoluteTitle = false,
}: PageMeta): Metadata {
  const fullTitle = absoluteTitle ? pageTitle : `${pageTitle} | ${TITLE_SUFFIX}`;
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

export const defaultDescription = `The Enclave Milton by Sundial Homes — freehold townhomes on Britannia Road from ${STARTING_PRICE_DISPLAY}. Register today for price list, floor plans, and VIP updates. Occupancy anticipated 2027.`;

/** Full homepage title — do not pass through the brand suffix again. */
export const homePageTitle = `The Enclave Milton | Freehold Townhomes from ${STARTING_PRICE_DISPLAY}`;
