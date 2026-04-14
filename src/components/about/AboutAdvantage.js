import styles from './AboutAdvantage.module.css';

const stats = [
  {
    stat: '100+',
    label: 'Certified Nurses',
    icon: 'bag',
  },
  {
    stat: '230+',
    label: 'Families Served',
    icon: 'people',
  },
  {
    stat: '3',
    label: 'Cities Across Pakistan',
    icon: 'pin',
  },
  {
    stat: '98%',
    label: 'Satisfaction Rate',
    icon: 'shield',
  },
];

export default function AboutAdvantage() {
  return (
    <section className={styles.section} aria-labelledby="advantage-heading">
      <div className={`${styles.inner} container-wide`}>
        <header className={styles.header}>
          <h2 id="advantage-heading" className={styles.title}>
            The CareNest Advantage
          </h2>
          <p className={styles.subtitle}>
            Providing excellence through measurable impact and unwavering dedication.
          </p>
        </header>
        <ul className={styles.grid}>
          {stats.map((item) => (
            <li key={item.label} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                <StatIcon name={item.icon} />
              </span>
              <span className={styles.stat}>{item.stat}</span>
              <span className={styles.label}>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StatIcon({ name }) {
  const s = {
    stroke: '#0056b3',
    strokeWidth: 1.5,
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };
  switch (name) {
    case 'bag':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 8V6a4 4 0 118 0v2" {...s} />
          <rect x="4" y="8" width="16" height="13" rx="2" {...s} />
          <path d="M9 12h6" {...s} />
        </svg>
      );
    case 'people':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="9" cy="8" r="3" {...s} />
          <path d="M4 20v-1a5 5 0 015-5" {...s} />
          <circle cx="17" cy="9" r="2.5" {...s} />
          <path d="M14 20v-1a4 4 0 014-4" {...s} />
        </svg>
      );
    case 'pin':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" {...s} />
          <circle cx="12" cy="10" r="2" {...s} />
        </svg>
      );
    case 'shield':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3l8 4v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V7l8-4z" {...s} />
          <path d="M9 12l2 2 4-4" {...s} />
        </svg>
      );
    default:
      return null;
  }
}
