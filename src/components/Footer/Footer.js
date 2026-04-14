import Link from 'next/link';
import styles from './Footer.module.css';

const quickLinks = [
  // { label: 'Privacy Policy', href: '/privacy' },
  // { label: 'Terms of Service', href: '/terms' },
  { label: 'Patient Portal', href: '/book' },
  { label: 'Careers', href: '/contact' },
  { label: 'Support', href: '/contact' },
];

const services = [
  { label: 'Nursing Care', href: '/services#nursing-care' },
  { label: 'Physiotherapy', href: '/services#physiotherapy' },
  { label: 'Lab Tests', href: '/services#lab-tests' },
  { label: 'Elderly Care', href: '/services#elderly-care' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container-wide`}>
        {/* Brand Column */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect width="32" height="32" rx="8" fill="url(#footer-grad)" />
              <path d="M16 8c-1.5 0-2.7.5-3.5 1.3C11.7 10.1 11 11.3 11 13c0 2.5 2 5 5 8 3-3 5-5.5 5-8 0-1.7-.7-2.9-1.5-3.7C18.7 8.5 17.5 8 16 8z" fill="#fff"/>
              <path d="M14 15h4M16 13v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
              <defs>
                <linearGradient id="footer-grad" x1="0" y1="0" x2="32" y2="32">
                  <stop stopColor="#004d99"/>
                  <stop offset="1" stopColor="#1565c0"/>
                </linearGradient>
              </defs>
            </svg>
            <span>CareNest</span>
          </Link>
          <p className={styles.tagline}>
            Elevating home healthcare through clinical precision and empathetic design.
          </p>
          {/* Social icons */}
          <div className={styles.socials}>
            {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform) => (
              <a key={platform} href="#" className={styles.socialIcon} aria-label={platform}>
                <SocialIcon name={platform} />
              </a>
            ))}
          </div>
        </div>

        {/* Services Column */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Services</h4>
          <ul className={styles.colLinks}>
            {services.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={styles.colLink}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.colLinks}>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={styles.colLink}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact</h4>
          <ul className={styles.colLinks}>
            <li className={styles.contactItem}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4l6 4 6-4M2 4v8h12V4H2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
              <span>care@carenest.pk</span>
            </li>
            <li className={styles.contactItem}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 14a7 7 0 01-4-2 7 7 0 01-2-4l2-1.5 1 2-1 1a5 5 0 003 3l1-1 2 1L10 14z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
              <span>+92 335-9057555</span>
            </li>
            <li className={styles.contactItem}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1C5 1 2 3.5 2 7c0 4 6 8 6 8s6-4 6-8c0-3.5-3-6-6-6z" stroke="currentColor" strokeWidth="1.2"/><circle cx="8" cy="7" r="2" stroke="currentColor" strokeWidth="1.2"/></svg>
              <span>Islamabad, Pakistan</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={`${styles.bottomInner} container-wide`}>
          <p>&copy; {new Date().getFullYear()} CareNest Pakistan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }) {
  const icons = {
    facebook: <path d="M9 3H7a4 4 0 00-4 4v2h3v6h4v-6h3l1-4h-4V7a1 1 0 011-1h2V3z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>,
    twitter: <path d="M2 4s3 1 5-1c0 0-2 4 1 6-2 0-4-1-4-1s0 3 4 4c0 0-3 2-7 1 0 0 4 3 9 1 4-2 6-6 6-10l2-2h-3l-2-1-2 2H8L6 2 4 4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>,
    linkedin: <><rect x="2" y="6" width="3" height="9" rx="0.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="3.5" cy="3.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M8 10v-2a2 2 0 014 0v2M8 6v9M12 6v9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></>,
    instagram: <><rect x="2" y="2" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.2"/><circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.2"/><circle cx="12" cy="4" r="0.8" fill="currentColor"/></>,
  };

  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      {icons[name]}
    </svg>
  );
}
