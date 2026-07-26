import type { MetadataRoute } from "next";
import { SITE_NAME_LONG, SITE_URL } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME_LONG,
    short_name: "Enclave Sundial",
    description:
      "The Enclave Milton Sundial Homes — freehold townhomes by Sundial Homes on Britannia Road, Milton.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1ea",
    theme_color: "#0e3d31",
    lang: "en-CA",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    id: SITE_URL,
  };
}
