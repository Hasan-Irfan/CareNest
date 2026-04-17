import AboutHero from './AboutHero';
import AboutTrust from './AboutTrust';
import AboutMissionVision from './AboutMissionVision';
import AboutAdvantage from './AboutAdvantage';
import AboutLeadership from './AboutLeadership';
import AboutPartners from './AboutPartners';
import styles from './AboutShell.module.css';
import Testimonial from '../Testimonial/Testimonial';

export default function AboutPage() {
  return (
    <div className={styles.wrapper}>
      <AboutHero />
      <AboutTrust />
      <AboutMissionVision />
      <AboutAdvantage />
      <Testimonial />
      {/* <AboutLeadership /> */}
      {/* <AboutPartners /> */}
    </div>
  );
}
