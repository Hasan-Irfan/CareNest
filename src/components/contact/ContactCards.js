'use client';

import { useSectionReveal } from '@/components/services/useSectionReveal';
import styles from './ContactCards.module.css';

const cards = [
  {
    key: 'email',
    title: 'Email us',
    body: 'Our support team typically responds within 2 business hours.',
    href: 'mailto:hello@carenest.pk',
    linkText: 'hello@carenest.pk',
    linkClass: styles.linkBlue,
    iconWrap: styles.iconBlue,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 6h16v12H4V6zm0 0l8 6 8-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: 'phone',
    title: 'Call us 24/7',
    body: 'Speak directly with our clinical coordination desk anytime.',
    href: 'tel:+92 335-9057555',
    linkText: '92 335-9057555',
    linkClass: styles.linkGreen,
    iconWrap: styles.iconGreen,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6.5 3h3l1.5 4-2 1.5a12 12 0 006 6l1.5-2 4 1.5v3a2 2 0 01-2 2h-1C8.5 21 3 15.5 3 8.5V7a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: 'whatsapp',
    title: 'WhatsApp',
    body: "Fast and efficient medical booking via Pakistan's favorite app.",
    href: 'https://wa.me/923359057555?text=Hello%20CareNest%2C%20I%27d%20like%20to%20chat%20with%20a%20nurse.',
    linkText: 'Chat with Staff',
    linkClass: styles.linkBlue,
    iconWrap: styles.iconBlue,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 10h4M8 14h8M6 18l-2 2v-4.5A4.5 4.5 0 014.5 8a7.5 7.5 0 1111 6.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ContactCards() {
  const ref = useSectionReveal(styles.visible);

  return (
    <section className={styles.section} ref={ref} aria-label="Contact options">
      <div className={`${styles.grid} container-wide`}>
        {cards.map((card, i) => (
          <article
            key={card.key}
            className={styles.card}
            style={{ animationDelay: `${0.05 + i * 0.07}s` }}
          >
            <div className={`${styles.iconCircle} ${card.iconWrap}`}>{card.icon}</div>
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <p className={styles.cardBody}>{card.body}</p>
            <a href={card.href} className={`${styles.cardLink} ${card.linkClass}`} target={card.key === 'whatsapp' ? '_blank' : undefined} rel={card.key === 'whatsapp' ? 'noopener noreferrer' : undefined}>
              {card.linkText}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
