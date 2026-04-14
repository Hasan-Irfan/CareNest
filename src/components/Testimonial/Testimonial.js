'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Testimonial.module.css';

const testimonials = [
  {
    name: "Mrs. Samina Hassan",
    role: "Islamabad",
    image: "/images/testimonial-portrait.png",
    rating: 5,
    text: `CareNest transformed our family's experience with healthcare. After my mother's hip surgery, their team provided seamless post-operative care at home.`
  },
  {
    name: "Mr. Ali Raza",
    role: "Rawalpindi ",
    image: "/images/testimonial-portrait2.jpg",
    rating: 4.5,
    text: `The staff was professional and responsive. Booking was smooth and the nurse was very kind. Slight delay once, but overall excellent experience.`
  },
  {
    name: "Mrs. Amna Khan",
    role: "Islamabad",
    image: "/images/leader-amna.png",
    rating: 5,
    text: `Highly reliable service! Their home care made recovery stress-free for my father. Truly compassionate and skilled team.`
  }
];

export default function Testimonial() {
  const sectionRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Intersection animation
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

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <section className={styles.testimonial} ref={sectionRef} id="testimonial">
      <div className={`${styles.inner} container`}>

        <div className={styles.card}>

          {/* ✅ Quote Icon (kept) */}
          <svg
            className={styles.quoteMark}
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path d="M14 28c-3.3 0-6-2.7-6-6 0-6.6 5.4-12 12-12v4c-4.4 0-8 3.6-8 8h2c3.3 0 6 2.7 6 6s-2.7 6-6 6zm20 0c-3.3 0-6-2.7-6-6 0-6.6 5.4-12 12-12v4c-4.4 0-8 3.6-8 8h2c3.3 0 6 2.7 6 6s-2.7 6-6 6z" fill="currentColor"/>
          </svg>

          {/* Quote */}
          <blockquote className={styles.quote}>
            “{current.text}”
          </blockquote>

          {/* Author */}
          <div className={styles.author}>
            <div className={styles.authorAvatar}>
              <Image
                src={current.image}
                alt={current.name}
                width={56}
                height={56}
                className={styles.authorImage}
              />
            </div>
            <div>
              <p className={styles.authorName}>{current.name}</p>
              <p className={styles.authorRole}>{current.role}</p>
            </div>
          </div>

          {/* Stars */}
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((i) => {
              const full = current.rating >= i;
              const half = current.rating === i - 0.5;

              return (
                <svg key={i} width="18" height="18" viewBox="0 0 18 18">
                  <defs>
                    <linearGradient id={`half-${i}`}>
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="50%" stopColor="#E5E7EB" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M9 1.5l2.2 4.5 5 .7-3.6 3.5.9 5L9 13l-4.5 2.2.9-5L1.8 6.7l5-.7L9 1.5z"
                    fill={
                      full
                        ? "#F59E0B"
                        : half
                        ? `url(#half-${i})`
                        : "#E5E7EB"
                    }
                  />
                </svg>
              );
            })}
          </div>

          {/* Dots */}
          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`${styles.dot} ${i === index ? styles.activeDot : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}