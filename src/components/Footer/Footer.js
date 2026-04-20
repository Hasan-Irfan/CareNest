import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';

const quickLinks = [
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
            <Image
              src="/images/logo.png"
              alt="CareNest"
              width={55}
              height={55}
              aria-hidden="true"
            />
            <span className={styles.logoText}>
              CareNest <span className="text-green-500">Pakistan</span>
            </span>
          </Link>

          <p className={styles.tagline}>
            Elevating home healthcare through clinical precision and empathetic design.
          </p>

          {/* Social icons */}
          <div className={styles.socials}>
            {[
              { name: 'facebook', url: 'https://www.facebook.com/share/15hGHBpmArE/' },
              { name: 'instagram', url: 'https://www.facebook.com/share/15hGHBpmArE/' }
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label={platform.name}
              >
                <SocialIcon name={platform.name} />
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
                <Link href={link.href} className={styles.colLink}>
                  {link.label}
                </Link>
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
                <Link href={link.href} className={styles.colLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact</h4>
          <ul className={styles.colLinks}>
            <li className={styles.contactItem}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4l6 4 6-4M2 4v8h12V4H2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
              <span>info@carenestpakistan.com</span>
            </li>
            <li className={styles.contactItem}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 14a7 7 0 01-4-2 7 7 0 01-2-4l2-1.5 1 2-1 1a5 5 0 003 3l1-1 2 1L10 14z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
              <span>+92 3359057555</span>
            </li>
            <li className={styles.contactItem}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1C5 1 2 3.5 2 7c0 4 6 8 6 8s6-4 6-8c0-3.5-3-6-6-6z" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="8" cy="7" r="2" stroke="currentColor" strokeWidth="1.2" />
              </svg>
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
    facebook: (
      <path
        d="M10 2h2V0h-2c-2.2 0-4 1.8-4 4v2H4v3h2v7h3V9h2.6l.4-3H9V4c0-.6.4-1 1-1z"
        fill="currentColor"
      />
    ),
    instagram: (
       <>
        <rect
          x="1.5"
          y="1.5"
          width="13"
          height="13"
          rx="3.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="8"
          cy="8"
          r="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="11.5" cy="4.5" r="1" fill="currentColor" />
      </>
    ),
  };

  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      {icons[name]}
    </svg>
  );
}