import ServicesHero from './ServicesHero';
import ServicesBento from './ServicesBento';
import ServicesCarePackages from './ServicesCarePackages';
import ServicesBottomCTA from './ServicesBottomCTA';
import shell from './ServicesShell.module.css';

export default function ServicesPage() {
  return (
    <div className={shell.shell}>
      <ServicesHero />
      <ServicesBento />
      <ServicesCarePackages />
      <ServicesBottomCTA />
    </div>
  );
}
