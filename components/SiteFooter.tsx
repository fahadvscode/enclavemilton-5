import Link from "next/link";
import { IMAGE_DISCLAIMER, NON_REPRESENTATION_DISCLAIMER } from "@/lib/site";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.brand}>The Enclave Milton Sundial Homes</p>
        <p className={styles.sub}>
          Sundial Homes The Enclave · Sundial Homes Milton · Britannia Road
        </p>
        <nav className={styles.links} aria-label="Footer">
          <Link href="/">Home</Link>
          <Link href="/floor-plans">All floor plans</Link>
          <Link href="/schools-and-area">Schools &amp; area</Link>
          <a href="#faq">FAQ</a>
          <a href="#register">Register</a>
        </nav>
        <p className={styles.disclaimer}>{NON_REPRESENTATION_DISCLAIMER}</p>
        <p className={styles.disclaimer}>{IMAGE_DISCLAIMER}</p>
      </div>
    </footer>
  );
}
