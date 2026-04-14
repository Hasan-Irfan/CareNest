import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutTrust.module.css';

export default function AboutTrust() {
  return (
    <section className={styles.section} aria-labelledby="about-trust-heading">
      <div className={`${styles.grid} container-wide`}>
        <div className={styles.visual}>
          <div className={styles.imageCard}>
            <Image
              src="/images/about-team1.png"
              alt="CareNest clinical team in scrubs providing compassionate home care"
              width={720}
              height={540}
              className={styles.image}
              sizes="(max-width: 900px) 100vw, 50vw"
              loading="eager"
            />
            <blockquote className={styles.quote}>
              <p>
                Treating every patient like family—that&apos;s the CareNest promise.
              </p>
            </blockquote>
          </div>
        </div>
        <div className={styles.copy}>
          <h2 id="about-trust-heading" className={styles.heading}>
            Built on Trust
          </h2>
          <p className={styles.body}>
            CareNest began with a simple belief: world-class healthcare should not be confined
            to hospital walls. Our founders saw families navigating long waits and fragmented
            follow-ups—and set out to build a clinically rigorous, human-centered alternative
            rooted in Pakistani communities.
          </p>
          <p className={styles.body}>
            Today, our multidisciplinary teams combine PMDC-certified expertise with protocols
            designed for the home—so every visit feels as dependable as it does dignified.
          </p>
          <Link href="/contact" className={styles.link}>
            Learn about our values <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
