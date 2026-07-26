import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ModelGrid from "@/components/ModelGrid";
import CtaBand from "@/components/CtaBand";
import { siteData } from "@/lib/floor-plans";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, floorPlansListSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  path: "/floor-plans",
  pageTitle: "Sundial Homes The Enclave Floor Plans",
  description:
    "Floor plans for The Enclave Milton Sundial Homes — Village back-to-back and Park traditional freehold townhomes on Britannia Road, Milton, Ontario.",
});

export default function FloorPlansPage() {
  return (
    <>
      <JsonLd data={[floorPlansListSchema(), breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Floor plans", path: "/floor-plans" },
      ])]} />
      <div className="section">
        <div className="container">
          <h1>
            Sundial Homes The Enclave — floor plans &amp; models
          </h1>
          <p className="lead">
            Every layout at The Enclave Milton Sundial Homes on Britannia Road — Village
            back-to-back townhomes and Park traditional two- and three-storey designs. Open a model
            page or register for the full package.{" "}
            <Link href="/schools-and-area">Schools, commute &amp; amenities guide</Link>.
          </p>
        </div>
      </div>

      {siteData.collections.map((collection) => (
        <section
          key={collection.id}
          id={collection.id}
          className="section section--tight"
          aria-labelledby={`${collection.id}-heading`}
        >
          <div className="container">
            <h2 id={`${collection.id}-heading`}>
              {collection.id === "village"
                ? "Which back-to-back townhomes are in the Village Collection?"
                : "Which traditional townhomes are in the Park Collection?"}
            </h2>
            <p className="lead">{collection.description}</p>
            {collection.footnote && (
              <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{collection.footnote}</p>
            )}
            <ModelGrid collection={collection} />
          </div>
        </section>
      ))}

      <CtaBand id="register-plans" />
    </>
  );
}
