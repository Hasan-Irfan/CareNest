import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ServicesPage from '@/components/services/ServicesPage';

export const metadata = {
  title: 'Medical Services | CareNest Pakistan',
  description:
    'Comprehensive home healthcare: doctor visits, 24/7 nursing, physiotherapy, diagnostics, elderly care, and personalized packages across Pakistan.',
};

export default function ServicesRoute() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesPage />
      </main>
      <Footer />
    </>
  );
}
