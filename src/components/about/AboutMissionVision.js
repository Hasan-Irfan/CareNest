import styles from './AboutMissionVision.module.css';

const cards = [
  {
    id: 'mission',
    title: 'Our Mission',
    body:
      'To deliver hospital-grade home healthcare that is accessible, transparent, and deeply personal with high security protocols — ' +
      'empowering families across Pakistan with trusted clinical partners at every step.',
    icon: 'rocket',
    variant: 'light',
  },
  {
    id: 'vision',
    title: 'Our Vision',
    body:
      'A future where distance, wait times, and uncertainty no longer define care — where technology and ' +
      'compassion work together so every household can expect the same standard of excellence.',
    icon: 'eye',
    variant: 'dark',
  },
];

export default function AboutMissionVision() {
  return (
    <section className={styles.section} aria-labelledby="mission-vision-label">
      <div className={`${styles.inner} container-wide`}>
        <h2 id="mission-vision-label" className="sr-only">
          Mission and vision
        </h2>
        <div className={styles.grid}>
          {cards.map((card) => (
            <article
              key={card.id}
              className={`${styles.card} ${card.variant === 'dark' ? styles.cardDark : styles.cardLight}`}
            >
              <div className={styles.iconWrap} aria-hidden="true">
                {card.icon === 'rocket' ? <IconRocket /> : <IconEye />}
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardBody}>{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconRocket() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3c-1 3-3 5-6 6l-2 7 4-3 4 3 4-3 4 3-2-7c-3-1-5-3-6-6z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M12 14v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconEye() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
