'use client';

import Link from 'next/link';
import { useSectionReveal } from './useSectionReveal';
import Image from 'next/image';
import styles from './ServicesCarePackages.module.css';

const bullets = ['Weekly clinical reviews', 'Dedicated case manager', 'Priority online booking'];

export default function ServicesCarePackages() {
  const ref = useSectionReveal(styles.visible);

  return (
    <section id="care-packages" className={styles.section} ref={ref} aria-labelledby="care-packages-title">
      <div className={`${styles.grid} container-wide`}>
        <div className={styles.visual}>
          <div className={styles.accent} aria-hidden="true" />
          <div className={styles.imageFrame}>
            <Image
              src="/images/nebulizer.jpg"
              alt="CareNest coverage map across Pakistan"
              width={480}
              height={520}
              className={styles.mapImage}
            />
          </div>
        </div>
        <div className={styles.copy}>
          <p className={styles.badge}>Featured detail</p>
          <h2 id="care-packages-title" className={styles.title}>
            Personalized care packages
          </h2>
          <p className={styles.desc}>
            Our tailored health plans are designed for long-term well-being. Whether it&apos;s post-operative
            recovery or chronic condition management, we bundle services to provide seamless, cost-effective care.
          </p>
          <ul className={styles.list}>
            {bullets.map((text) => (
              <li key={text} className={styles.listItem}>
                <span className={styles.check} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#2563eb" />
                    <path d="M8 12l2.5 2.5L16 9" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {text}
              </li>
            ))}
          </ul>
          <Link href="/book" className={styles.cta}>
            Explore care packages
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h12M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
