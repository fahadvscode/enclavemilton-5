import styles from "./CompareTable.module.css";

const ROWS = [
  { label: "Storeys", village: "2 (back-to-back)", park: "2 & 3 storey" },
  { label: "Layout type", village: "Back-to-back freehold", park: "Traditional townhome" },
  {
    label: "Ideal buyer",
    village: "First-time, investor, efficient footprint",
    park: "Growing & multigenerational families",
  },
];

export default function CompareTable() {
  return (
    <section className="section section--tight" aria-labelledby="compare-heading">
      <div className="container">
        <h2 id="compare-heading">
          Village vs Park at The Enclave Milton — which collection fits you?
        </h2>
        <p className="lead">
          Both The Enclave Milton Townhomes collections are freehold; the
          difference is layout style and square footage.
        </p>
        <div className={styles.wrap}>
          <table className={styles.table}>
            <caption className="sr-only">
              Comparison of Village and Park collections at The Enclave Milton
            </caption>
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">Village Collection</th>
                <th scope="col">Park Collection</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>{row.village}</td>
                  <td>{row.park}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
