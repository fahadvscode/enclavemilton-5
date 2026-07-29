import { STARTING_PRICE_DISPLAY } from "@/lib/site";
import styles from "./KeywordIntro.module.css";

export default function KeywordIntro() {
  return (
    <section
      className={`section section--dark ${styles.section}`}
      aria-labelledby="about-enclave-heading"
    >
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className={styles.kicker}>Sundial Homes · The Enclave · Now Selling</p>
            <h2 id="about-enclave-heading">
              Sundial Homes The Enclave on Britannia Road
            </h2>
            <p className={styles.body}>
              <strong>The Enclave Milton</strong> is the full community name for this
              southeast Milton address: a Sundial Homes master-planned community of freehold
              townhomes between James Snow Parkway and Fourth Line, starting from{" "}
              {STARTING_PRICE_DISPLAY}. You may also see it listed as{" "}
              <strong>The Enclave Milton Sundial Homes</strong>, <strong>The Enclave Milton Townhomes</strong>,
              or simply <strong>The Enclave</strong> when comparing new homes in Halton Region.
            </p>
            <p className={styles.body}>
              Village delivers efficient back-to-back freehold layouts; Park adds traditional
              two- and three-storey designs for larger households.{" "}
              <a href="/floor-plans" className={styles.inlineLink}>
                Browse every Sundial model
              </a>{" "}
              or register above for the price list, PDF floor plans, and release updates.
            </p>
          </div>
          <aside className={styles.aside} aria-label="Quick facts about Sundial Homes The Enclave">
            <h3 className={styles.asideTitle}>Project snapshot</h3>
            <dl className={styles.dl}>
              <div>
                <dt>Builder</dt>
                <dd>Sundial Homes</dd>
              </div>
              <div>
                <dt>Product</dt>
                <dd>Freehold townhomes</dd>
              </div>
              <div>
                <dt>Starting from</dt>
                <dd>{STARTING_PRICE_DISPLAY}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>Britannia Rd, Milton ON</dd>
              </div>
              <div>
                <dt>Collections</dt>
                <dd>Village &amp; Park</dd>
              </div>
              <div>
                <dt>Occupancy</dt>
                <dd>2027</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
