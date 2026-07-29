import Image from "next/image";
import { BUILDER_NAME, STARTING_PRICE_DISPLAY } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import LeadForm from "./LeadForm";
import styles from "./HeroBlock.module.css";

export default function HeroBlock() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.bg}>
        <Image
          src={IMAGES.hero}
          alt="The Enclave Milton Sundial Homes — community rendering on Britannia Road"
          fill
          priority
          sizes="100vw"
          className={styles.bgImg}
        />
        <div className={styles.overlay} />
      </div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.copy}>
          <p className={styles.kicker}>
            Freehold Townhomes in Milton · From {STARTING_PRICE_DISPLAY}
          </p>
          <h1 id="hero-heading">The Enclave Milton</h1>
          <p className={styles.lead}>
            Now available — freehold Village back-to-back and Park traditional townhomes by{" "}
            {BUILDER_NAME} on Britannia Road. Starting from {STARTING_PRICE_DISPLAY}. Occupancy
            anticipated for 2027. Register today for the price list and floor plans.
          </p>
        </div>

        <aside id="register" className={styles.formCard} aria-labelledby="hero-form-title">
          <h2 id="hero-form-title" className={styles.formTitle}>Register Today</h2>
          <p className={styles.formSubtitle}>
            Immediately get the price list &amp; floor plans in your email.
          </p>
          <LeadForm idPrefix="hero" compact hero />
        </aside>
      </div>
    </section>
  );
}
