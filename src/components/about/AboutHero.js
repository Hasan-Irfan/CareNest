import Link from 'next/link';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.section} aria-labelledby="about-hero-heading">
      <div className={`${styles.inner} container-wide`}>
        <p className={styles.eyebrow}>Since 2018</p>
        <h1 id="about-hero-heading" className={styles.title}>
          Our <em className={styles.titleEm}>Journey</em>
        </h1>
        <p className={styles.lead}>
          Redefining healthcare accessibility in Pakistan through a blend of compassionate
          home-based care and cutting-edge digital efficiency.
        </p>
        <Link href="/services" className={styles.textLink}>
          Explore our services <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
