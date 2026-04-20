'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
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
  const [mounted, setMounted] = useState(false);

  // Wait for client mount before using createPortal
  useEffect(() => {
    setMounted(true);
  }, []);

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
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const mobileMenuMarkup = (
    <div
      className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
      aria-hidden={!menuOpen}
      // Clicking the backdrop (this div) closes the menu
      onClick={() => setMenuOpen(false)}
    >
      {/* stopPropagation prevents clicks inside the panel from bubbling to the backdrop */}
      <ul className={styles.mobileLinks} onClick={(e) => e.stopPropagation()}>
        {navLinks.map((link, i) => (
          <li key={link.label} style={{ animationDelay: menuOpen ? `${i * 0.06}s` : '0s' }}>
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
      <Link
        href="/book"
        className="btn-primary"
        onClick={() => setMenuOpen(false)}
      >
        <span>Book Consultation</span>
      </Link>
    </div>
  );

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <nav className={`${styles.nav} container-wide`}>
          {/* Logo */}
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
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      {/* Mobile Menu — portaled to <body> to escape header stacking context */}
      {mounted && createPortal(mobileMenuMarkup, document.body)}
    </>
  );
}