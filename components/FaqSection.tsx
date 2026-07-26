import { HOME_FAQ } from "@/lib/faq";
import styles from "./FaqSection.module.css";

export default function FaqSection() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-heading" style={{ background: "var(--cream)" }}>
      <div className="container">
        <h2 id="faq-heading">
          FAQ — The Enclave Milton Sundial Homes &amp; Sundial Homes Milton
        </h2>
        <p className="lead">
          Answers for buyers researching Sundial Homes The Enclave, freehold townhomes on
          Britannia Road, and how to register for floor plans at The Enclave Milton.
        </p>
        <div className={styles.list}>
          {HOME_FAQ.map((item) => (
            <details key={item.question} className={styles.item}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
