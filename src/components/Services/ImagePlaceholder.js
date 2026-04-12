'use client';

import styles from './ImagePlaceholder.module.css';

/**
 * Visual placeholder until real assets are added. Pass `promptKey` for documentation only.
 */
export default function ImagePlaceholder({ label, ratio = '4 / 3', className = '', fill }) {
  return (
    <div
      className={`${styles.wrap} ${fill ? styles.fill : ''} ${className}`}
      style={fill ? undefined : { aspectRatio: ratio }}
      role="img"
      aria-label={label}
    >
      <div className={styles.inner}>
        <span className={styles.icon} aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.25" />
            <circle cx="9" cy="11" r="2" stroke="currentColor" strokeWidth="1.25" />
            <path d="M15 9h2M15 12h2M15 15h1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
          </svg>
        </span>
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  );
}
