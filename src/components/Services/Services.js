'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Services.module.css';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3v6m0 0v6m0-6h6m-6 0H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <rect x="3" y="17" width="22" height="8" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Doctor Visits',
    description: 'General practitioners and specialists available for detailed home assessments and diagnosis.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C8.5 4 4 8.5 4 14s4.5 10 10 10 10-4.5 10-10S19.5 4 14 4z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 9v5l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="2" fill="currentColor"/>
      </svg>
    ),
    title: 'Nursing Care',
    description: 'Highly trained ICU and specialized nurses for short-term and long-term clinical support.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M7 21l4-7 4 4 6-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="3" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Physiotherapy',
    description: 'Targeted recovery programs for sports injuries, stroke rehabilitation, and post-op care.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="6" y="3" width="16" height="22" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 9h6M11 13h6M11 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Lab Tests',
    description: 'Professional specimen collection at your doorstep with rapid, digital result delivery.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 24c5.5-4 9-8 9-12a9 9 0 10-18 0c0 4 3.5 8 9 12z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Elderly Care',
    description: 'Compassionate companionship and medical supervision for our respected seniors.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14h4l3-8 6 16 3-8h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Post-Surgery Care',
    description: 'Clinical monitoring and wound care to ensure a seamless transition from hospital to home.',
  },
];

export default function Services() {
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
    <section className={styles.services} ref={sectionRef} id="services">
      <div className={`${styles.inner} container`}>
        <div className={styles.header}>
          <span className="section-label">Our Services</span>
          <h2 className="section-title">
            Comprehensive Healthcare,
            <br />Tailored to You
          </h2>
          <p className="section-subtitle">
            Comprehensive healthcare services tailored to your personal environment.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <div
              key={service.title}
              className={styles.card}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={styles.iconWrap}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <Link href="/services" className={`btn-ghost ${styles.cardLink}`}>
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
