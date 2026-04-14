'use client';

import { useSectionReveal } from '@/components/services/useSectionReveal';
import styles from './ContactHero.module.css';

export default function ContactHero() {
  const ref = useSectionReveal(styles.visible);

  return (
    <section className={styles.section} ref={ref} aria-labelledby="contact-hero-title">
      <div className={`${styles.inner} container-wide`}>
        <p className={styles.overline}>Get in touch</p>
        <h1 id="contact-hero-title" className={styles.title}>
          Let&apos;s <span className={styles.titleAccent}>Connect.</span>
        </h1>
        <p className={styles.lead}>
          Personalized healthcare is just a message away. Reach out to the carenest and experience care curated for your specific needs.
        </p>
      </div>
    </section>
  );
}
