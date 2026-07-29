export const SITE_DOMAIN = "theenclavesundial.ca";
export const SITE_URL = `https://www.${SITE_DOMAIN}`;
/** Supabase `source` column — identifies this Site E variant. */
export const SITE_SOURCE = SITE_DOMAIN;
export const SITE_NAME = "The Enclave Milton";
export const SITE_NAME_LONG = "The Enclave Milton Sundial Homes";
export const BUILDER_NAME = "Sundial Homes";
export const BUILD_DATE = process.env.BUILD_DATE ?? new Date().toISOString().split("T")[0];

/** Public starting price — keep in sync with schema.org Offer.lowPrice */
export const STARTING_PRICE = 599990;
export const STARTING_PRICE_DISPLAY = "$599,990";
export const STARTING_PRICE_LABEL = `from ${STARTING_PRICE_DISPLAY}`;

export const DEVELOPMENT_GEO = {
  latitude: 43.5085,
  longitude: -79.8628,
} as const;

export const GEO_REFERENCE_LABEL =
  "Britannia Road at James Snow Parkway, The Enclave Milton (between James Snow Parkway & Fourth Line)";

/** Shown beside distance tables and school lists. */
export const DISTANCE_DISCLAIMER =
  "Distances and drive times are approximate and may vary with traffic conditions. School assignment is address-based — verify with HDSB and HCDSB for your lot.";

/** Shown in footer and beside registration forms — no agent/brokerage identity. */
export const NON_REPRESENTATION_DISCLAIMER =
  "This is an independent marketing website. It is not the builder's official sales office and is not affiliated with or endorsed by Sundial Homes. Prices, sizes, features, incentives, and availability are set by the builder and may change without notice. E.&O.E.";

/** Lifestyle / area photos on this site. */
export const IMAGE_DISCLAIMER =
  "Some lifestyle and area images on this website are AI-generated for illustrative purposes only. They are not official builder photography, do not depict actual Enclave Milton homes or interiors, and should not be relied on as a representation of the finished community.";

export const FORM_DISCLAIMER =
  "By registering, you consent to be contacted about The Enclave Milton. This site is not Sundial Homes' official sales office.";
