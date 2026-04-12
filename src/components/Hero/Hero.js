'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero} ref={sectionRef} id="hero">
      <div className={`${styles.inner} container-wide`}>
        {/* Left Content */}
        <div className={styles.content}>
          <span className={styles.badge}>PMDC Certified Excellence</span>

          <h1 className={styles.title}>
            Private Medical
            <br />
            <span className={styles.titleAccent}>Excellence</span> at Home
          </h1>

          <p className={styles.subtitle}>
            Experience private medical excellence without leaving your residence.
            Our PMDC certified elite staff provides hospital-grade treatment
            within the sanctuary of your own home.
          </p>

          <div className={styles.ctas}>
            <Link href="/book" className="btn-primary">
              <span>Schedule Consultation</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ position: 'relative', zIndex: 1 }}>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/services" className="btn-secondary">
              <span>Explore Services</span>
            </Link>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>98.7%</span>
              <span className={styles.statLabel}>Patient Satisfaction</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>500+</span>
              <span className={styles.statLabel}>Medical Staff</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>15K+</span>
              <span className={styles.statLabel}>Home Visits</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className={styles.imageWrap}>
          <div className={styles.imageCard}>
            <Image
              src="/images/hero-healthcare.png"
              alt="CareNest nurse providing premium home healthcare"
              width={640}
              height={520}
              priority
              className={styles.heroImage}
            />
          </div>
          {/* Floating badge */}
          <div className={styles.floatingBadge}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="10" cy="10" r="10" fill="#046e01" fillOpacity="0.12"/>
              <path d="M6 10.5l2.5 2.5L14 8" stroke="#046e01" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Patient satisfaction rating across Pakistan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
