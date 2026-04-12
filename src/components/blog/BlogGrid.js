'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSectionReveal } from '@/components/services/useSectionReveal';
import styles from './BlogGrid.module.css';

export default function BlogGrid({ posts }) {
  const ref = useSectionReveal(styles.visible);

  return (
    <section className={styles.section} ref={ref} aria-label="Latest articles">
      <div className={`${styles.wrap} container-wide`}>
        <ul className={styles.grid}>
          {posts.map((post, index) => (
            <li key={post.slug} className={styles.item} style={{ animationDelay: `${0.06 + index * 0.08}s` }}>
              <article className={styles.card}>
                <span className={`${styles.badge} ${styles[`badge_${post.badgeVariant}`]}`}>{post.badge}</span>
                <div className={styles.thumb}>
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className={`${styles.thumbImg} ${post.badgeVariant === 'blue' ? styles.thumbBlue : ''}`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.footer}>
                  <span className={styles.author}>{post.author}</span>
                  <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                    Read more <span aria-hidden="true">{'>'}</span>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
