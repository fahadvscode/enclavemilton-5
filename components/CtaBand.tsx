import LeadForm from "./LeadForm";
import {
  IMAGE_DISCLAIMER,
  NON_REPRESENTATION_DISCLAIMER,
  STARTING_PRICE_DISPLAY,
} from "@/lib/site";
import styles from "./CtaBand.module.css";

type CtaBandProps = {
  id?: string;
  title?: string;
  variant?: "dark" | "light";
};

export default function CtaBand({
  id = "register-mid",
  title = "Register today for The Enclave Milton",
  variant = "dark",
}: CtaBandProps) {
  return (
    <section
      className={`${styles.band} ${variant === "light" ? styles.bandLight : ""}`}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className={`container ${styles.inner}`}>
        <div>
          <h2 id={`${id}-title`}>{title}</h2>
          <p>
            Get the price list and floor plans for Village back-to-back and Park traditional freehold
            townhomes by Sundial Homes — starting from {STARTING_PRICE_DISPLAY}.
          </p>
          <p className={styles.disclaimer}>{NON_REPRESENTATION_DISCLAIMER}</p>
          <p className={styles.disclaimer}>{IMAGE_DISCLAIMER}</p>
        </div>
        <div className={styles.form}>
          <LeadForm idPrefix={id} compact={variant === "dark"} />
        </div>
      </div>
    </section>
  );
}
