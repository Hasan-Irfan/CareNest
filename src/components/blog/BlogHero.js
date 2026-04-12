'use client';

import { useSectionReveal } from '@/components/services/useSectionReveal';
import styles from './BlogHero.module.css';

export default function BlogHero() {
  const ref = useSectionReveal(styles.visible);

  return (
    <section className={styles.section} ref={ref} aria-labelledby="blog-hero-title">
      <div className={`${styles.inner} container-wide`}>
        <p className={styles.badge}>Our journal</p>
        <h1 id="blog-hero-title" className={styles.title}>
          Insights &amp; <em className={styles.titleEm}>Health Tips</em>
        </h1>
        <p className={styles.lead}>
          Expert medical advice, caregiving stories, and the latest healthcare innovations delivered directly to your
          doorstep and digital screen.
        </p>
      </div>
    </section>
  );
}
