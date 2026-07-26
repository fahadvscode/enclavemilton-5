/**
 * Image assets — logo/hero from project CDN; area photos are AI-generated (see IMAGE_DISCLAIMER).
 */
export const IMAGES = {
  /** Official Enclave wordmark */
  logo: "https://images.preconfactory.com/storage/v1/object/public/rental-documents/1780533510331_enclave_logo.png",

  /** Sundial community rendering — homepage & OG */
  hero:
    "https://images.preconfactory.com/storage/v1/object/public/rental-documents/1780268468620_Screenshot-2026-05-13-at-16.59.20.png",

  /** AI-generated lifestyle / area imagery (not builder photography) */
  trails: "/images/trails.jpg",
  recreation: "/images/recreation.jpg",
  cycling: "/images/cycling.jpg",
  nature: "/images/nature.jpg",
  transit: "/images/transit.jpg",
  shopping: "/images/shopping.jpg",
} as const;

export type CommunityImageKey = keyof Omit<typeof IMAGES, "hero" | "logo">;
