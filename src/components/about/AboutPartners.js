import styles from './AboutPartners.module.css';

const partners = ['PAK HEALTH', 'MED TECH', 'GLOBAL CARE', 'NURSING ASSOC', 'CITY HOSPITAL'];

export default function AboutPartners() {
  return (
    <section className={styles.section} aria-label="Partner organizations">
      <div className={`${styles.inner} container-wide`}>
        <ul className={styles.row}>
          {partners.map((name) => (
            <li key={name} className={styles.logo}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
