import styles from "./WhySection.module.css";

const POINTS = [
  {
    title: "Sundial Homes in southeast Milton",
    body: "The Enclave Milton Sundial Homes anchors Britannia Road between James Snow Parkway and Fourth Line — a Halton address buyers track when searching Sundial Homes Milton.",
  },
  {
    title: "Freehold townhome ownership",
    body: "Both Village and Park collections are marketed as freehold layouts, appealing to buyers who want townhome living without condo-style maintenance fees.",
  },
  {
    title: "Two collections, one master plan",
    body: "Village specializes in back-to-back footprints; Park adds traditional two- and three-storey Sundial Homes townhomes, including select end and corner units.",
  },
  {
    title: "Commute-ready Britannia Road site",
    body: "Quick ties to Highway 401, Highway 407, and Milton GO pair with planned trails, a village square, and a future elementary school in the master plan.",
  },
];

export default function WhySection() {
  return (
    <section className={`section ${styles.whySection}`} aria-labelledby="why-heading">
      <div className="container">
        <h2 id="why-heading">Why buyers research The Enclave Milton Sundial Homes</h2>
        <p className="lead">
          Sundial Homes The Enclave combines freehold ownership, dual collections, and a Britannia
          Road location built for GTA commuters.
        </p>
        <ul className={styles.list}>
          {POINTS.map((p, i) => (
            <li key={p.title} style={{ animationDelay: `${0.05 * i}s` }}>
              <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
