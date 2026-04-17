'use client';

import { useState } from 'react';
import emailjs from "@emailjs/browser";
import { useSectionReveal } from '@/components/services/useSectionReveal';
import styles from './AppointmentFormCard.module.css';

const services = [
  'Nursing care',
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

    const form = e.currentTarget;

    setStatus("sending");

    emailjs
      .sendForm(
        "service_i2sxfg3",
        "template_4o53eu8",
        form,
        "QhE1CU0j3FzCMzl7C"
      )
      .then(
        () => {
          setStatus("received");
          form.reset();

          setTimeout(() => setStatus(null), 5000); // reset UI after 5s
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("error");
        }
      );
  }

  return (
    <div className={styles.root} ref={ref}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h2 className={styles.cardTitle}>
          Appointment Details
        </h2>

        {/* Row 1 */}
        <div className={styles.row}>
          <label className={styles.field}>
            <span className={styles.label}>Full name</span>
            <input
              className={styles.input}
              name="name"
              type="text"
              placeholder="e.g. Ahmed Ali"
              required
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Email</span>
            <input
              className={styles.input}
              name="email"
              type="email"
              placeholder="ahmed@email.com"
              required
            />
          </label>
        </div>

        {/* Row 2 */}
        <div className={styles.row}>
          <label className={styles.field}>
            <span className={styles.label}>Phone number</span>
            <input
              className={styles.input}
              name="phone"
              type="tel"
              placeholder="+92 3XX XXXXXXX"
              required
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Service</span>
            <select className={styles.select} name="service" required>
              <option value="">Choose a service</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>
        </div>

        {/* Row 3 */}
        <div className={styles.row}>
          <label className={styles.field}>
            <span className={styles.label}>City</span>
            <select className={styles.select} name="city" required>
              <option value="">Select city</option>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Preferred date</span>
            <input
              className={styles.input}
              name="preferredDate"
              type="date"
              required
            />
          </label>
        </div>

        {/* Notes */}
        <label className={styles.field}>
          <span className={styles.label}>Additional notes</span>
          <textarea
            className={styles.textarea}
            name="notes"
            rows={4}
            placeholder="Tell us about specific medical requirements..."
          />
        </label>

        {/* Status Messages */}
        {status === "sending" && (
          <p className={styles.feedback}>Sending...</p>
        )}

        {status === "received" && (
          <p className={styles.feedback}>
            Thank you—we’ll contact you shortly.
          </p>
        )}

        {status === "error" && (
          <p className={styles.feedback}>
            Something went wrong. Try again.
          </p>
        )}

        {/* Button */}
        <button
          type="submit"
          className={styles.submit}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Confirm booking"}
        </button>
      </form>
    </div>
  );
}