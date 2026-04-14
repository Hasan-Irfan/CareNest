'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Sanctuary.module.css';

const pillars = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Tailored Care Plans',
    description: 'Every medical strategy is co-created with specialists and family members to ensure absolute alignment with patient lifestyle and clinical needs.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 3l1 2 2 .5-1.5 1.5.3 2-1.8-1-1.8 1 .3-2L13 5.5l2-.5 1-2z" fill="currentColor"/>
      </svg>
    ),
    title: 'Elite Medical Staff',
    description: 'Our recruitment process only accepts the top 5% of medical professionals in Pakistan, ensuring hospital-grade rigor at home.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7v5l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Seamless Coordination',
    description: 'A dedicated Care Coordinator manages all appointments, logistics, and family communications, so you can focus solely on recovery.',
  },
];

export default function Sanctuary() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.sanctuary} ref={sectionRef} id="sanctuary">
      <div className={`${styles.inner} container-wide`}>
        {/* Image side */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/sanctuary-interior1.jpg"
              alt="A serene, premium home healthcare environment"
              width={580}
              height={440}
              className={styles.image}
            />
          </div>
        </div>

        {/* Content side */}
        <div className={styles.contentCol}>
          <span className="section-label">Why CareNest</span>
          <h2 className="section-title">The Sanctuary Philosophy</h2>

          <div className={styles.pillars}>
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={styles.pillar}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className={styles.pillarIcon}>{pillar.icon}</div>
                <div>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarDesc}>{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
