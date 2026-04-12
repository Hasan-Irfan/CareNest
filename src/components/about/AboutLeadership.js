import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutLeadership.module.css';

const leaders = [
  {
    name: 'Dr. Sarah Ahmed',
    role: 'Chief Medical Officer',
    image: '/images/leader-sarah.png',
  },
  {
    name: 'Usman Khan',
    role: 'Founder & CEO',
    image: '/images/leader-usman.png',
  },
  {
    name: 'Amna Qureshi',
    role: 'Head of Operations',
    image: '/images/leader-amna.png',
  },
];

export default function AboutLeadership() {
  return (
    <section className={styles.section} aria-labelledby="leadership-heading">
      <div className={`${styles.inner} container-wide`}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h2 id="leadership-heading" className={styles.title}>
              Our Leadership
            </h2>
            <p className={styles.subtitle}>
              Driven by medical experts and visionary leaders committed to Pakistan&apos;s healthcare revolution.
            </p>
          </div>
          <Link href="/contact" className={styles.cta}>
            Meet Full Team
          </Link>
        </header>
        <ul className={styles.grid}>
          {leaders.map((person) => (
            <li key={person.name} className={styles.card}>
              <div className={styles.portrait}>
                <Image
                  src={person.image}
                  alt={person.name}
                  width={400}
                  height={480}
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className={styles.name}>{person.name}</h3>
              <p className={styles.role}>{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
