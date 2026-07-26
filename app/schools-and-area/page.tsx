import type { Metadata } from "next";
import Link from "next/link";
import AreaAmenitiesSection from "@/components/AreaAmenitiesSection";
import AreaBuyerGuide from "@/components/AreaBuyerGuide";
import AreaCommuteSection from "@/components/AreaCommuteSection";
import AreaFaqSection from "@/components/AreaFaqSection";
import AreaSchoolsSection from "@/components/AreaSchoolsSection";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { communityLocation } from "@/data/location";
import { buildMetadata } from "@/lib/seo";
import { areaPageGraph, breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  path: "/schools-and-area",
  pageTitle: "Schools & Area — The Enclave Milton Sundial Homes",
  description:
    "Living near Sundial Homes The Enclave on Britannia Road: HDSB and HCDSB schools, Milton GO, highways, shopping, parks, and area FAQs. Verify school catchment before you buy.",
});

export default function SchoolsAndAreaPage() {
  return (
    <>
      <JsonLd
        data={[
          areaPageGraph(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Schools & area", path: "/schools-and-area" },
          ]),
        ]}
      />
      <div className="section">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden> / </span>
            <span>Schools &amp; area</span>
          </nav>
          <h1>Schools, commute &amp; amenities near Sundial Homes The Enclave</h1>
          <p className="lead">
            The Enclave Milton Sundial Homes at {communityLocation.address} in {communityLocation.area} —
            minutes from Highway 401, served by Halton District and Catholic school boards, with
            Toronto Premium Outlets, Mattamy National Cycling Centre, and Conservation Halton within a
            short drive. Register below for Sundial floor plans and details.
          </p>
          <p>
            <Link href="/floor-plans">View floor plans</Link>
            {" · "}
            <a href="#register-area">Register for details</a>
          </p>
        </div>
      </div>
      <AreaBuyerGuide />
      <AreaSchoolsSection />
      <AreaCommuteSection />
      <AreaAmenitiesSection />
      <AreaFaqSection />
      <CtaBand id="register-area" title="Register for The Enclave Milton Sundial Homes details" />
    </>
  );
}
