import AppointmentHero from './AppointmentHero';
import WhatsAppBanner from './WhatsAppBanner';
import styles from './AppointmentShell.module.css';

export default function AppointmentPage() {
  return (
    <div className={styles.shell}>
      <AppointmentHero />
      <WhatsAppBanner />
    </div>
  );
}
