import Image from "next/image";
import Link from "next/link";
import { BUILDER_NAME } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import { siteData } from "@/lib/floor-plans";
import LeadForm from "./LeadForm";
import styles from "./HeroBlock.module.css";

const REGISTER_BENEFITS = [
  "PDF floor plans for Village & Park models",
  "Layout details for every Sundial model",
  "Email updates when new phases release",
] as const;

const TRUST_POINTS = [
  "Freehold townhomes — Village & Park collections",
  "Britannia Road between James Snow Parkway & Fourth Line",
  "Highway 401 & Milton GO within a short drive",
] as const;

export default function HeroBlock() {
  const occupancy = siteData.project.occupancy;

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={`container ${styles.layout}`}>
        <header className={styles.head}>
          <span className={styles.statusBadge}>Now selling · Occupancy {occupancy}</span>
          <p className={styles.eyebrow}>{BUILDER_NAME} · Milton, Ontario</p>
          <h1 id="hero-heading">The Enclave Milton Sundial Homes</h1>
          <p className={styles.subline}>Freehold townhomes on Britannia Road, Milton</p>
        </header>

        <aside id="register" className={styles.formCard} aria-labelledby="hero-form-title">
          <p className={styles.formKicker}>Free registration · No obligation</p>
          <h2 id="hero-form-title" className={styles.formTitle}>
            Get floor plans &amp; community details
          </h2>
          <ul className={styles.formBenefits} aria-label="What you receive when you register">
            {REGISTER_BENEFITS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <LeadForm idPrefix="hero" compact hero />
        </aside>

        <div className={styles.proof}>
          <ul className={styles.trustList}>
            {TRUST_POINTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className={styles.links}>
            <Link href="/floor-plans" className={styles.secondaryLink}>
              Compare all floor plans
            </Link>
            <span className={styles.linkSep} aria-hidden>
              ·
            </span>
            <Link href="/schools-and-area" className={styles.secondaryLink}>
              Schools &amp; area guide
            </Link>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.imageFrame}>
            <Image
              src={IMAGES.hero}
              alt="The Enclave Milton Sundial Homes — community rendering on Britannia Road"
              fill
              priority
              sizes="(max-width: 960px) 100vw, 1140px"
              className={styles.heroImage}
            />
            <p className={styles.imageCaption}>The Enclave Milton by {BUILDER_NAME} — rendering</p>
          </div>
        </div>
      </div>
    </section>
  );
}
