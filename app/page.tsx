import JsonLd from "@/components/JsonLd";
import HeroBlock from "@/components/HeroBlock";
import KeywordIntro from "@/components/KeywordIntro";
import WhySection from "@/components/WhySection";
import BentoCollections from "@/components/BentoCollections";
import CompareTable from "@/components/CompareTable";
import CtaBand from "@/components/CtaBand";
import GeoLocationHub from "@/components/GeoLocationHub";
import FaqSection from "@/components/FaqSection";
import { homepageGraph } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageGraph()} />
      <HeroBlock />
      <KeywordIntro />
      <WhySection />
      <BentoCollections />
      <CompareTable />
      <CtaBand
        id="register-mid"
        title="Get VIP access — price list & floor plans"
      />
      <GeoLocationHub />
      <FaqSection />
      <CtaBand
        id="register-footer"
        title="Register today for The Enclave Milton"
        variant="light"
      />
    </>
  );
}
