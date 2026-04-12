'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './CTA.module.css';

export default function CTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.cta} ref={sectionRef} id="cta">
      <div className={`${styles.inner} container`}>
        <div className={styles.card}>
          {/* Background shapes */}
          <div className={styles.bgShape1} />
          <div className={styles.bgShape2} />

          <div className={styles.content}>
            <span className="section-label" style={{ color: 'var(--on-primary-container)' }}>Get Started</span>
            <h2 className={styles.title}>Ready for a New Standard of Care?</h2>
            <p className={styles.desc}>
              Connect with our medical advisors today to schedule your initial
              clinical consultation. Your journey to premium recovery begins here.
            </p>

            <div className={styles.actions}>
              <Link href="/book" className={styles.btnLight}>
                <span>Schedule Consultation</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/contact" className={styles.btnOutline}>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
