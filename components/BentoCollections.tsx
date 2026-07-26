import Link from "next/link";
import { siteData } from "@/lib/floor-plans";
import styles from "./BentoCollections.module.css";

export default function BentoCollections() {
  const village = siteData.collections.find((c) => c.id === "village")!;
  const park = siteData.collections.find((c) => c.id === "park")!;

  return (
    <section className="section section--tight" aria-labelledby="collections-heading">
      <div className="container">
        <h2 id="collections-heading">Sundial Homes Village &amp; Park collections</h2>
        <p className="lead">
          At The Enclave Milton Sundial Homes, both lines are freehold: Village back-to-back
          townhomes and Park traditional two- and three-storey layouts.
        </p>
        <div className={styles.bento}>
          <article className={styles.tile}>
            <span className={styles.tag}>Village Collection</span>
            <h3>{village.name}</h3>
            <p>{village.type}</p>
            <p className={styles.desc}>
              Compact back-to-back freehold townhomes — ideal for
              first-time buyers and investors.
            </p>
            <Link href="/floor-plans#village">Explore Village Collection</Link>
          </article>
          <article className={styles.tile}>
            <span className={styles.tag}>Park Collection</span>
            <h3>{park.name}</h3>
            <p>{park.type}</p>
            <p className={styles.desc}>
              Traditional two- and three-storey townhomes — family-scale
              layouts including end and corner units.
            </p>
            <Link href="/floor-plans#park">Explore Park Collection</Link>
          </article>
          <article className={`${styles.tile} ${styles.tileWide}`}>
            <div>
              <h3>The Enclave floor plans</h3>
              <p>Compare every model, size, and collection in one place.</p>
            </div>
            <Link href="/floor-plans" className="btn btn--outline">
              View floor plans
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
