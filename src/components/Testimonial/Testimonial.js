'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Testimonial.module.css';

export default function Testimonial() {
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
    <section className={styles.testimonial} ref={sectionRef} id="testimonial">
      <div className={`${styles.inner} container`}>
        <div className={styles.card}>
          {/* Quote mark */}
          <svg className={styles.quoteMark} width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M14 28c-3.3 0-6-2.7-6-6 0-6.6 5.4-12 12-12v4c-4.4 0-8 3.6-8 8h2c3.3 0 6 2.7 6 6s-2.7 6-6 6zm20 0c-3.3 0-6-2.7-6-6 0-6.6 5.4-12 12-12v4c-4.4 0-8 3.6-8 8h2c3.3 0 6 2.7 6 6s-2.7 6-6 6z" fill="currentColor"/>
          </svg>

          <blockquote className={styles.quote}>
            &ldquo;CareNest transformed our family&apos;s experience with healthcare. After my mother&apos;s
            hip surgery, their team provided seamless post-operative care at home. The nurses were
            not only clinically excellent but also deeply compassionate. It felt like having a
            private hospital wing in our living room.&rdquo;
          </blockquote>

          <div className={styles.author}>
            <div className={styles.authorAvatar}>
              <Image
                src="/images/testimonial-portrait.png"
                alt="Mrs. Samina Hassan"
                width={56}
                height={56}
                className={styles.authorImage}
              />
            </div>
            <div>
              <p className={styles.authorName}>Mrs. Samina Hassan</p>
              <p className={styles.authorRole}>Lahore Resident</p>
            </div>
          </div>

          {/* Stars */}
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1.5l2.2 4.5 5 .7-3.6 3.5.9 5L9 13l-4.5 2.2.9-5L1.8 6.7l5-.7L9 1.5z" fill="#F59E0B"/>
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
