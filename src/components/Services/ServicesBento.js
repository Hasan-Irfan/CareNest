'use client';

import Link from 'next/link';
import { useSectionReveal } from './useSectionReveal';
import ImagePlaceholder from './ImagePlaceholder';
import styles from './ServicesBento.module.css';

const quadServices = [
  { title: 'Wound dressing', icon: 'bandage' },
  { title: 'Post-hospital care', icon: 'hospital' },
  { title: 'Caregivers', icon: 'heart' },
  { title: 'Bedridden care', icon: 'bed' },
];

const labIcons = ['Blood panel', 'ECG', 'Ultrasound'];

export default function ServicesBento() {
  const ref = useSectionReveal(styles.visible);

  return (
    <section className={styles.section} ref={ref} aria-label="Care services overview">
      <div className={`${styles.wrap} container-wide`}>
        <div className={styles.bento}>
          {/* Doctor — tall left */}
          <article className={`${styles.card} ${styles.doctor}`} style={{ animationDelay: '0.04s' }}>
            <div className={styles.doctorTop}>
              <span className={styles.doctorIcon} aria-hidden="true">
                <IconHouseCross />
              </span>
              <h2 className={styles.cardTitle}>Doctor home visits</h2>
              <p className={styles.cardDesc}>
                Licensed physicians for assessments, follow-ups, and treatment plans—without the waiting room.
              </p>
              <Link href="/book" className={styles.greenLink}>
                Book consultant <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ImagePlaceholder label="Doctor portrait" ratio="16 / 11" className={styles.doctorImg} />
          </article>

          {/* Nursing — wide blue */}
          <article className={`${styles.card} ${styles.nursing}`} style={{ animationDelay: '0.1s' }}>
            <span className={styles.nursingDecor} aria-hidden="true">
              <IconChart />
            </span>
            <h2 className={styles.nursingTitle}>24/7 Nursing care</h2>
            <p className={styles.nursingDesc}>
              Continuous monitoring, medication administration, and specialist nursing for acute and chronic needs.
            </p>
          </article>

          {/* Physio — green */}
          <article className={`${styles.card} ${styles.physio}`} style={{ animationDelay: '0.14s' }}>
            <span className={styles.physioIcon} aria-hidden="true">
              <IconDna />
            </span>
            <h2 className={styles.physioTitle}>Physiotherapy at home</h2>
            <p className={styles.physioDesc}>
              Evidence-based rehab sessions tailored to mobility, pain, and post-operative recovery goals.
            </p>
            <span className={styles.physioArrow} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H9M17 7v8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </article>

          {/* Elderly — image bg */}
          <article className={`${styles.card} ${styles.elderly}`} style={{ animationDelay: '0.18s' }}>
            <div className={styles.elderlyBg} aria-hidden="true">
              <ImagePlaceholder label="Hands holding — elderly care" fill />
            </div>
            <div className={styles.elderlyContent}>
              <h2 className={styles.elderlyTitle}>Elderly care</h2>
              <p className={styles.elderlyDesc}>
                Dignified support with daily living, vitals, and companionship from trained caregivers.
              </p>
              <span className={styles.elderlyTag}>Specialized program</span>
            </div>
          </article>

          {/* IV + Vitals stack */}
          <div className={styles.ivColumn} style={{ animationDelay: '0.22s' }}>
            <article className={`${styles.card} ${styles.mini}`}>
              <span className={styles.miniIconGreen} aria-hidden="true">
                <IconIv />
              </span>
              <h3 className={styles.miniTitle}>IV drip therapy</h3>
              <p className={styles.miniDesc}>Hydration and infusion protocols supervised by nurses.</p>
            </article>
            <article className={`${styles.card} ${styles.mini}`}>
              <span className={styles.miniIconBlue} aria-hidden="true">
                <IconPulse />
              </span>
              <h3 className={styles.miniTitle}>Vitals monitoring</h3>
              <p className={styles.miniDesc}>Scheduled checks with digital logs for your physician.</p>
            </article>
          </div>

          {/* 2x2 small */}
          <div className={styles.quad} style={{ animationDelay: '0.26s' }}>
            {quadServices.map((item) => (
              <article key={item.title} className={`${styles.card} ${styles.quadCard}`}>
                <span className={styles.quadIcon} aria-hidden="true">
                  <QuadIcon name={item.icon} />
                </span>
                <h3 className={styles.quadTitle}>{item.title}</h3>
              </article>
            ))}
          </div>

          {/* Mobile diagnostics */}
          <article className={`${styles.card} ${styles.mobile}`} style={{ animationDelay: '0.3s' }}>
            <div className={styles.mobileText}>
              <h2 className={styles.mobileTitle}>Mobile diagnostics</h2>
              <p className={styles.mobileDesc}>
                Sample collection and bedside diagnostics with rapid reporting to your care team.
              </p>
            </div>
            <ul className={styles.labRow} aria-label="Sample tests">
              {labIcons.map((t) => (
                <li key={t} className={styles.labPill}>
                  <span className={styles.labDot} aria-hidden="true" />
                  <span className={styles.labLabel}>{t}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Emergency */}
          <article className={`${styles.card} ${styles.emergency}`} style={{ animationDelay: '0.34s' }}>
            <span className={styles.emergencyIcon} aria-hidden="true">
              <IconAmbulance />
            </span>
            <h2 className={styles.emergencyTitle}>Emergency services</h2>
            <p className={styles.emergencyDesc}>24/7 ambulance &amp; oxygen therapy coordination.</p>
            <a href="tel:+92421111111" className={styles.emergencyBtn}>
              Urgent call
            </a>
          </article>

          {/* Bottom pair */}
          <article className={`${styles.card} ${styles.bottom}`} style={{ animationDelay: '0.38s' }}>
            <span className={styles.bottomIcon} aria-hidden="true">
              <IconPill />
            </span>
            <h2 className={styles.bottomTitle}>Medicine delivery</h2>
            <p className={styles.bottomDesc}>Verified prescriptions to your door.</p>
          </article>
          <article className={`${styles.card} ${styles.bottom}`} style={{ animationDelay: '0.42s' }}>
            <span className={styles.bottomIcon} aria-hidden="true">
              <IconEquipment />
            </span>
            <h2 className={styles.bottomTitle}>Medical equipment</h2>
            <p className={styles.bottomDesc}>Rental and setup for home oxygen, beds, and monitors.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function IconHouseCross() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-9.5z"
        stroke="#2563eb"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M12 9v4M10 11h4" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 19h16M4 15l4-4 4 3 4-6 4 4"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDna() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 4c2 2 2 4 0 6M17 4c-2 2-2 4 0 6M7 20c2-2 2-4 0-6M17 20c-2-2-2-4 0-6M9 9c1.5 1.5 4.5 1.5 6 0M9 15c1.5-1.5 4.5-1.5 6 0"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconIv() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 3v4M8 7h6l2 3v11a2 2 0 01-2 2H8a2 2 0 01-2-2V10l2-3z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10 14h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function IconPulse() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h3l2-5 3 10 2-7 2 2h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconAmbulance() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 16h-1a2 2 0 01-2-2V8a2 2 0 012-2h8l4 4v4a2 2 0 01-2 2h-1M6 16v2M18 16v2M8 18h8M4 10h3M16 10h2"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="18" r="2" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="16" cy="18" r="2" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function IconPill() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="8" width="14" height="8" rx="4" transform="rotate(-30 12 12)" stroke="#2563eb" strokeWidth="1.3" />
    </svg>
  );
}

function IconEquipment() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="7" width="16" height="12" rx="2" stroke="#2563eb" strokeWidth="1.3" />
      <path d="M8 11h8M8 14h5" stroke="#2563eb" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function QuadIcon({ name }) {
  const stroke = '#2563eb';
  const s = { stroke, strokeWidth: 1.3, fill: 'none' };
  switch (name) {
    case 'bandage':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 8l8 8M10 6l8 8-4 4-8-8 4-4z" {...s} />
        </svg>
      );
    case 'hospital':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 21V8l8-4 8 4v13M9 21v-6h6v6" {...s} />
          <path d="M12 11v2M11 12h2" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case 'heart':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 20s-7-4.35-7-9.5a4.5 4.5 0 017.5-3.25A4.5 4.5 0 0119 10.5C19 15.65 12 20 12 20z"
            {...s}
          />
        </svg>
      );
    case 'bed':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12V8h6v4M3 12v6M9 12h12v6M3 17h18" {...s} />
        </svg>
      );
    default:
      return null;
  }
}
