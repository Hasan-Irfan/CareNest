'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Appointment', href: '/book' },
  { label: 'Contact', href: '/contact' },
];

function linkActive(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`${styles.nav} container-wide`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="url(#logo-grad)" />
            <path d="M16 8c-1.5 0-2.7.5-3.5 1.3C11.7 10.1 11 11.3 11 13c0 2.5 2 5 5 8 3-3 5-5.5 5-8 0-1.7-.7-2.9-1.5-3.7C18.7 8.5 17.5 8 16 8z" fill="#fff"/>
            <path d="M14 15h4M16 13v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
            <defs>
              <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32">
                <stop stopColor="#004d99"/>
                <stop offset="1" stopColor="#1565c0"/>
              </linearGradient>
            </defs>
          </svg>
          <span className={styles.logoText}>CareNest</span>
        </Link>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`${styles.link} ${linkActive(pathname, link.href) ? styles.linkActive : ''}`}
                aria-current={linkActive(pathname, link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className={styles.actions}>
          <Link href="/book" className="btn-primary">
            <span>Book Consultation</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link, i) => (
            <li key={link.label} style={{ animationDelay: `${i * 0.06}s` }}>
              <Link
                href={link.href}
                className={`${styles.mobileLink} ${linkActive(pathname, link.href) ? styles.mobileLinkActive : ''}`}
                onClick={() => setMenuOpen(false)}
                aria-current={linkActive(pathname, link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/book" className="btn-primary" onClick={() => setMenuOpen(false)}>
          <span>Book Consultation</span>
        </Link>
      </div>
    </header>
  );
}
