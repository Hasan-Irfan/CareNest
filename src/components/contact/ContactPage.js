import ContactHero from './ContactHero';
import ContactCards from './ContactCards';
import ContactMap from './ContactMap';
import ContactFormSection from './ContactFormSection';
import styles from './ContactShell.module.css';

export default function ContactPage() {
  return (
    <div className={styles.shell}>
      <ContactHero />
      <ContactCards />
      <ContactMap />
      <ContactFormSection />
    </div>
  );
}
