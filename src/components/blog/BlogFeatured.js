'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSectionReveal } from '@/components/services/useSectionReveal';
import styles from './BlogFeatured.module.css';

export default function BlogFeatured({ post }) {
  const ref = useSectionReveal(styles.visible);

  return (
    <section className={styles.section} ref={ref} aria-labelledby="featured-post-title">
      <div className={`${styles.wrap} container-wide`}>
        <article className={styles.card}>
          <div className={styles.media}>
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, min(1200px, 96vw)"
              priority
            />
            <div className={styles.overlay} aria-hidden="true" />
            <div className={styles.decor} aria-hidden="true" />
          </div>
          <div className={styles.content}>
            <div className={styles.text}>
              <p className={styles.kicker}>{post.kicker}</p>
              <h2 id="featured-post-title" className={styles.postTitle}>
                {post.title}
              </h2>
              <div className={styles.meta}>
                <span className={styles.metaItem}>
                  <IconCalendar />
                  {post.date}
                </span>
                <span className={styles.metaItem}>
                  <IconClock />
                  {post.readTime}
                </span>
              </div>
            </div>
            <Link href={`/blog/${post.slug}`} className={styles.cta}>
              Read article
              <span className={styles.ctaArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

function IconCalendar() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
