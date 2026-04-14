'use client';

import { useState } from 'react';
import { useSectionReveal } from '@/components/services/useSectionReveal';
import styles from './AppointmentFormCard.module.css';

const services = [
  'Doctor home visits',
  '24/7 Nursing care',
  'Physiotherapy at home',
  'IV drip & vitals',
  'Elderly care',
  'Psychiatrist sessions',
  'Nutritionist planning',
  'Medicine delivery',
];

const cities = ['Islamabad', 'Lahore', 'Rawalpindi', 'Karachi'];

export default function AppointmentFormCard() {
  const ref = useSectionReveal(styles.visible, 0.08);
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    setStatus('received');
    console.info('Appointment request', payload);
  }

  return (
    <div className={styles.root} ref={ref}>
      <form className={styles.card} onSubmit={handleSubmit} aria-labelledby="appointment-form-title">
        <h2 id="appointment-form-title" className={styles.cardTitle}>
          Appointment Details
        </h2>

        <div className={styles.row}>
          <label className={styles.field} style={{ animationDelay: '0.1s' }}>
            <span className={styles.label}>Full name</span>
            <input
              className={styles.input}
              name="fullName"
              type="text"
              placeholder="e.g. Ahmed Ali"
              required
              autoComplete="name"
            />
          </label>
          <label className={styles.field} style={{ animationDelay: '0.16s' }}>
            <span className={styles.label}>Phone number</span>
            <input
              className={styles.input}
              name="phone"
              type="tel"
              placeholder="+92 3XX XXXXXXX"
              required
              autoComplete="tel"
            />
          </label>
        </div>

        <div className={styles.row}>
          <label className={styles.field} style={{ animationDelay: '0.22s' }}>
            <span className={styles.label}>Select service</span>
            <select className={styles.select} name="service" required defaultValue="">
              <option value="" disabled>
                Choose a service
              </option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
          <label className={styles.field} style={{ animationDelay: '0.28s' }}>
            <span className={styles.label}>City</span>
            <select className={styles.select} name="city" required defaultValue="">
              <option value="" disabled>
                Select city
              </option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className={styles.field} style={{ animationDelay: '0.34s' }}>
          <span className={styles.label}>Preferred date</span>
          <span className={styles.dateWrap}>
            <input className={styles.input} name="preferredDate" type="date" required />
            <span className={styles.dateIcon} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </span>
          </span>
        </label>

        <label className={styles.field} style={{ animationDelay: '0.4s' }}>
          <span className={styles.label}>Additional notes</span>
          <textarea
            className={styles.textarea}
            name="notes"
            rows={4}
            placeholder="Tell us about specific medical requirements..."
          />
        </label>

        {status === 'received' && (
          <p className={styles.feedback} role="status">
            Thank you—we&apos;ll contact you shortly to confirm your visit.
          </p>
        )}

        <button type="submit" className={styles.submit}>
          <span>Confirm booking</span>
          <span aria-hidden="true">→</span>
        </button>
      </form>
    </div>
  );
}
