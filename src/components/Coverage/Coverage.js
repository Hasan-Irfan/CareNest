'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Coverage.module.css';

const cities = [
  { name: 'Lahore', label: 'Main Hub', x: '62%', y: '38%' },
  { name: 'Karachi', label: 'Southern HQ', x: '38%', y: '78%' },
  { name: 'Islamabad', label: 'Northern Hub', x: '55%', y: '18%' },
];

export default function Coverage() {
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
    <section className={styles.coverage} ref={sectionRef} id="coverage">
      <div className={`${styles.inner} container-wide`}>
        {/* Text */}
        <div className={styles.textCol}>
          <span className="section-label">Our Network</span>
          <h2 className="section-title">
            Nationwide Coverage,
            <br />Local Expertise
          </h2>
          <p className="section-subtitle">
            Our premium care network is expanding rapidly across Pakistan.
            We currently maintain fully operational medical hubs in the major
            metropolitan corridors.
          </p>

          <div className={styles.cityCards}>
            {cities.map((city, i) => (
              <div key={city.name} className={styles.cityCard} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={styles.cityDot} />
                <div>
                  <p className={styles.cityName}>{city.name}</p>
                  <p className={styles.cityLabel}>{city.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className={styles.mapCol}>
          <div className={styles.mapWrap}>
            <Image
              src="/images/pakistan-map.png"
              alt="CareNest coverage map across Pakistan"
              width={480}
              height={520}
              className={styles.mapImage}
            />
            {/* Animated dots */}
            {cities.map((city) => (
              <div
                key={city.name}
                className={styles.mapPin}
                style={{ left: city.x, top: city.y }}
                title={city.name}
              >
                <span className={styles.mapPulse} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
