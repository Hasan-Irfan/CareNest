'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useSectionReveal } from '@/components/services/useSectionReveal';
import styles from './ContactFormSection.module.css';
import emailjs from "@emailjs/browser";

const services = [
  'In-Home Nursing Care',
  'Psychiatrist sessions',
  'Nutritionist planning',
  'Physiotherapy at home',
  'Mobile diagnostics',
  'Elderly care',
  'Emergency coordination',
  'Other',
];

export default function ContactFormSection() {
  const ref = useSectionReveal(styles.visible);
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState(null); // null | sending | sent | error

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;

    setStatus("sending");

    emailjs
      .sendForm(
        'service_i2sxfg3',
        'template_7ret10m',
        form,
        'QhE1CU0j3FzCMzl7C'
      )
      .then(
        () => {
          setStatus("sent");
          form.reset();

          setTimeout(() => setStatus(null), 5000); // reset UI
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus("error");
        }
      );
  }

  return (
    <section className={styles.section} ref={ref} aria-labelledby="contact-form-title">
      <div className={`${styles.grid} container-wide`}>
        <div className={styles.formCol}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2 id="contact-form-title" className={styles.formTitle}>
              Send us a message
            </h2>

            <label className={styles.field}>
              <span className={styles.label}>Full name</span>
              <input
                name="name"
                type="text"
                className={styles.input}
                placeholder="Dr. Sarah Ahmed"
                required
                autoComplete="name"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Email address</span>
              <input
                name="email"
                type="email"
                className={styles.input}
                placeholder="sarah@example.com"
                required
                autoComplete="email"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Service of interest</span>
              <select name="service" className={styles.select} required defaultValue="In-Home Nursing Care">
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Your message</span>
              <textarea
                name="message"
                className={styles.textarea}
                rows={5}
                placeholder="How can our clinical team assist you today?"
                required
              />
            </label>

            {status === "sending" && (
              <p className={styles.feedback}>Sending...</p>
            )}

            {status === "sent" && (
              <p className={styles.feedback}>
                Thank you—our team will reply shortly.
              </p>
            )}

            {status === "error" && (
              <p className={styles.feedback}>
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              className={styles.submit}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>

        <div className={styles.visualCol}>
          <div className={styles.visual}>
            <Image
              src="/images/leader-sarah.png"
              alt="CareNest clinical team member"
              width={560}
              height={680}
              className={styles.portrait}
              sizes="(max-width: 960px) 100vw, 45vw"
            />
            <aside className={styles.callout} aria-label="Mission note">
              <span className={styles.calloutIcon} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21s-6-3.2-8-7c2-6 8-9 8-9s6 3 8 9c-2 3.8-8 7-8 7z"
                    stroke="currentColor"
                    strokeWidth="1.35"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 11.5c.8-.8 2.2-.8 3 0l.5.5.5-.5c.8-.8 2.2-.8 3 0"
                    stroke="currentColor"
                    strokeWidth="1.35"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <p className={styles.calloutText}>Empathetic care is at the heart of our mission.</p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
