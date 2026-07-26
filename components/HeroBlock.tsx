import Image from "next/image";
import Link from "next/link";
import { BUILDER_NAME } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import LeadForm from "./LeadForm";
import styles from "./HeroBlock.module.css";

export default function HeroBlock() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.media}>
        <Image
          src={IMAGES.hero}
          alt="The Enclave Milton Sundial Homes — community rendering on Britannia Road"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 58vw"
          className={styles.mediaImage}
        />
        <div className={styles.mediaShade} />
        <p className={styles.mediaLabel}>
          {BUILDER_NAME} · The Enclave Milton
        </p>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelInner}>
          <header className={styles.intro}>
            <p className={styles.eyebrow}>Britannia Road, Milton</p>
            <h1 id="hero-heading">The Enclave Milton Sundial Homes</h1>
            <p className={styles.lead}>
              Freehold Village &amp; Park townhomes by {BUILDER_NAME} — between James Snow Parkway
              and Fourth Line. Register for floor plans and release updates.
            </p>
          </header>

          <aside id="register" className={styles.formWrap} aria-labelledby="hero-form-title">
            <h2 id="hero-form-title" className={styles.formTitle}>
              Request floor plans
            </h2>
            <p className={styles.formHint}>We&apos;ll email layouts and details for the models you choose.</p>
            <LeadForm idPrefix="hero" compact hero />
          </aside>

          <nav className={styles.quickLinks} aria-label="Explore the site">
            <Link href="/floor-plans">Floor plans</Link>
            <Link href="/schools-and-area">Schools &amp; area</Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
