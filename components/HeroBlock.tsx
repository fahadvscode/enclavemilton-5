import Image from "next/image";
import Link from "next/link";
import { BUILDER_NAME } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import LeadForm from "./LeadForm";
import styles from "./HeroBlock.module.css";

export default function HeroBlock() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.visual}>
        <div className={styles.imageWrap}>
          <Image
            src={IMAGES.hero}
            alt="The Enclave Milton Sundial Homes — community rendering on Britannia Road"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 55vw"
            className={styles.heroImg}
          />
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.copy}>
            <p className={styles.kicker}>Britannia Road, Milton</p>
            <h1 id="hero-heading">The Enclave Milton</h1>
            <p className={styles.lead}>
              A master-planned community of freehold Village back-to-back and Park traditional 
              townhomes by {BUILDER_NAME}. Discover refined living.
            </p>
          </div>

          <div id="register" className={styles.formCard} aria-labelledby="hero-form-title">
            <h2 id="hero-form-title" className={styles.formTitle}>Register for Floor Plans</h2>
            <p className={styles.formSubtitle}>Receive exclusive access to layouts and pricing.</p>
            <LeadForm idPrefix="hero" compact hero />
          </div>
        </div>
      </div>
    </section>
  );
}
