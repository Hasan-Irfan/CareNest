'use client';

import { useState } from 'react';
import { useSectionReveal } from '@/components/services/useSectionReveal';
import styles from './BlogNewsletter.module.css';

export default function BlogNewsletter() {
  const ref = useSectionReveal(styles.visible);
  const [done, setDone] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = fd.get('email');
    setDone(true);
    console.info('Newsletter signup', email);
  }

  return (
    <section className={styles.section} ref={ref} aria-labelledby="newsletter-title">
      <div className={`${styles.card} container-wide`}>
        <div className={styles.copy}>
          <h2 id="newsletter-title" className={styles.title}>
            Stay informed
          </h2>
          <p className={styles.desc}>
            Get the latest healthcare tips and updates from Pakistan&apos;s most trusted home care provider.
          </p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="blog-newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="blog-newsletter-email"
            name="email"
            type="email"
            className={styles.input}
            placeholder="Your email address"
            required
            autoComplete="email"
          />
          <button type="submit" className={styles.btn}>
            Subscribe
          </button>
        </form>
        {done ? (
          <p className={styles.feedback} role="status">
            Thanks—you&apos;re on the list.
          </p>
        ) : null}
      </div>
    </section>
  );
}
