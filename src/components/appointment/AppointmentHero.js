'use client';

import Image from 'next/image';
import { useSectionReveal } from '@/components/services/useSectionReveal';
import AppointmentFormCard from './AppointmentFormCard';
import styles from './AppointmentHero.module.css';

export default function AppointmentHero() {
  const ref = useSectionReveal(styles.visible);

  return (
    <section className={styles.section} ref={ref} aria-labelledby="appointment-hero-title">
      <div className={`${styles.inner} container-wide`}>
        <div className={styles.copy}>
          <p className={styles.badge}>Premium home healthcare</p>
          <h1 id="appointment-hero-title" className={styles.title}>
            Book Your <em className={styles.titleEm}>Care</em> Visit
          </h1>
          <p className={styles.lead}>
            Professional medical assistance delivered with precision and empathy. Choose your service and
            we&apos;ll handle the rest.
          </p>
          <div className={styles.social}>
            <div className={styles.avatars} aria-hidden="true">
              <span className={styles.avatar}>
                <Image src="/images/leader-sarah.png" alt="" width={40} height={40} />
              </span>
              <span className={styles.avatar}>
                <Image src="/images/leader-usman.png" alt="" width={40} height={40} />
              </span>
              <span className={styles.avatar}>
                <Image src="/images/leader-amna.png" alt="" width={40} height={40} />
              </span>
            </div>
            <p className={styles.socialText}>Joined by 500+ Qualified Professionals</p>
          </div>
        </div>
        <AppointmentFormCard />
      </div>
    </section>
  );
}
