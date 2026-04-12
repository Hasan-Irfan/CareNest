'use client';

import { useEffect, useRef } from 'react';
import styles from './Journey.module.css';

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    description: 'Consult with our advisors to define your clinical needs and preferences for home-based care.',
  },
  {
    num: '02',
    title: 'Clinical Assessment',
    description: 'A senior medical officer visits your residence to conduct a comprehensive clinical audit and risk profile.',
  },
  {
    num: '03',
    title: 'Implementation',
    description: 'Your dedicated medical team is deployed, and our care protocols begin immediately within your sanctuary.',
  },
];

export default function Journey() {
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
    <section className={styles.journey} ref={sectionRef} id="journey">
      <div className={`${styles.inner} container`}>
        <div className={styles.header}>
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Your Journey to Recovery</h2>
          <p className="section-subtitle">
            A structured approach to bringing clinical excellence to your doorstep.
          </p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={styles.step}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={styles.stepNum}>
                <span>{step.num}</span>
              </div>
              {i < steps.length - 1 && <div className={styles.connector} />}
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
