'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSectionReveal } from '@/components/services/useSectionReveal';
import styles from './ContactMap.module.css';

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=The+Clinical+Atelier+Plot+22+G-11+Markaz+Islamabad+Pakistan';

export default function ContactMap() {
  const ref = useSectionReveal(styles.visible);

  return (
    <section className={styles.section} ref={ref} aria-label="Office location">
      <div className={`${styles.wrap} container-wide`}>
        <div className={styles.map}>
          <Image
            src="/images/pakistan-map.png"
            alt="Regional coverage map"
            fill
            className={styles.mapImg}
            sizes="(max-width: 768px) 100vw, min(1200px, 96vw)"
          />
          <div className={styles.mapTint} aria-hidden="true" />
          <div className={styles.mapGrid} aria-hidden="true" />
          <div className={styles.pinCard}>
            <h2 className={styles.pinTitle}>Address</h2>
            <p className={styles.pinAddress}>
             944, Street 96-A, E11/4, Near E11/2 Markaz, islamabad - 44000, Pakistan
            </p>
            <Link href={MAPS_URL} className={styles.pinLink} target="_blank" rel="noopener noreferrer">
              Get directions <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
