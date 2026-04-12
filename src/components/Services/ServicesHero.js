'use client';

import Link from 'next/link';
import { useSectionReveal } from './useSectionReveal';
import styles from './ServicesHero.module.css';

export default function ServicesHero() {
  const ref = useSectionReveal(styles.visible);

  return (
    <section className={styles.section} ref={ref} aria-labelledby="services-hero-title">
      <div className={`${styles.inner} container-wide`}>
        <p className={styles.badge}>Premium healthcare solutions</p>
        <h1 id="services-hero-title" className={styles.title}>
          Comprehensive <em className={styles.titleEm}>Care</em>
        </h1>
        <p className={styles.lead}>
          Hospital-grade expertise delivered where you feel safest—your home. Explore our full spectrum
          of clinical, nursing, and support services designed around your schedule and your family.
        </p>
        <Link href="/book" className={styles.link}>
          Book a consultation <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
