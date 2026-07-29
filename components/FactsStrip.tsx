import { STARTING_PRICE_DISPLAY } from "@/lib/site";
import styles from "./FactsStrip.module.css";

const FACTS = [
  { value: "15", label: "The Enclave floor plans" },
  { value: STARTING_PRICE_DISPLAY, label: "starting from" },
  { value: "$0", label: "monthly maintenance" },
  { value: "Freehold", label: "Milton townhomes" },
  { value: "2027", label: "occupancy" },
];

export default function FactsStrip() {
  return (
    <section className={styles.strip} aria-label="The Enclave Milton key facts">
      <div className={`container ${styles.inner}`}>
        <ul>
          {FACTS.map((f) => (
            <li key={f.label}>
              <span className={styles.value}>{f.value}</span>
              <span className={styles.label}>{f.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
