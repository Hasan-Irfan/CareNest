'use client';

import Link from 'next/link';
import { useSectionReveal } from './useSectionReveal';
import styles from './ServicesBottomCTA.module.css';

export default function ServicesBottomCTA() {
  const ref = useSectionReveal(styles.visible);

  return (
    <section className={styles.section} ref={ref} aria-labelledby="services-cta-title">
        <div className={`${styles.banner} container-wide`}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.glow2} aria-hidden="true" />
          <div className={styles.inner}>
            <h2 id="services-cta-title" className={styles.title}>
              Your Health,
              <br />
              <span className={styles.titleMuted}>Your Home.</span>
            </h2>
            <p className={styles.desc}>
              Experience the peace of mind that comes with professional medical care in your most comfortable
              environment.
            </p>
            <div className={styles.actions}>
              <Link href="/book" className={styles.btnPrimary}>
                Get started today
              </Link>
              <Link href="/services#care-packages" className={styles.btnGhost}>
                View all packages
              </Link>
            </div>
          </div>
        </div>
    </section>
  );
}
