import Image from "next/image";
import Link from "next/link";
import { BUILDER_NAME } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import LeadForm from "./LeadForm";
import styles from "./HeroBlock.module.css";

export default function HeroBlock() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={`container ${styles.shell}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{BUILDER_NAME} · Milton, Ontario</p>
          <h1 id="hero-heading">The Enclave Milton Sundial Homes</h1>
          <p className={styles.subline}>Freehold townhomes on Britannia Road, Milton</p>
          <p className={styles.support}>
            Sundial Homes&apos; The Enclave pairs Village back-to-back layouts with Park traditional
            two- and three-storey townhomes between James Snow Parkway and Fourth Line. Register for
            floor plans and community updates.
          </p>
          <div className={styles.links}>
            <Link href="/floor-plans" className="btn btn--primary">
              Explore floor plans
            </Link>
            <Link href="/schools-and-area" className={styles.textLink}>
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
              sizes="(max-width: 960px) 100vw, 50vw"
              className={styles.heroImage}
            />
          </div>
        </div>

        <aside id="register" className={styles.formCard} aria-labelledby="hero-form-title">
          <h2 id="hero-form-title" className={styles.formTitle}>
            Get Sundial floor plans &amp; details
          </h2>
          <LeadForm idPrefix="hero" compact />
        </aside>
      </div>
    </section>
  );
}
