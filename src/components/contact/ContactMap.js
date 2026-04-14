'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSectionReveal } from '@/components/services/useSectionReveal';
import styles from './ContactMap.module.css';

const MAPS_URL =
  'https://www.google.com/maps/place/33.698692,72.975196/data=!4m6!3m5!1s0!7e2!8m2!3d33.698692!4d72.975196!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjE1LjEYACD67A0qnQEsOTQyNTk1NDksOTQyNjc3MjcsOTQyOTIxOTUsOTQyOTk1MzIsMTAwNzk2NDk4LDEwMDc5Nzc1NywxMDA3OTY1MzUsOTQyODQ0OTYsOTQyODA1NzYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsOTQyNzk2MTksMTAwNzk5MjQ2QgJQSw%3D%3D&skid=015e9602-24f9-4a46-9f3d-1eaee3d14a24';

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
