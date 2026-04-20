import Image from 'next/image';
import styles from './AboutLeadership.module.css';

const founder = {
  name: 'Dr. Hafeez Malik',
  role: 'Founder and CEO of CareNest Pakistan',
  image: '/images/founder.png',
  bio: 'Dr. Hafeez Malik is a visionary healthcare leader with over 10 years of experience in medical practice and healthcare management. His passion for accessible healthcare has driven him to establish CareNest as Pakistan\'s premier home healthcare provider, ensuring quality medical care reaches every doorstep across the nation.',
};

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
        </header>
        <div className={styles.leaderCard}>
          <div className={styles.portrait}>
            <Image
              src={founder.image}
              alt={founder.name}
              width={400}
              height={480}
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 400px"
              loading="eager"
            />
          </div>
          <div className={styles.info}>
            <h3 className={styles.name}>{founder.name}</h3>
            <p className={styles.role}>{founder.role}</p>
            <p className={styles.bio}>{founder.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
