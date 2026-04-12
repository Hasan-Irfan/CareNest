import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import AppointmentPage from '@/components/appointment/AppointmentPage';

export const metadata = {
  title: 'Book an Appointment | CareNest Pakistan',
  description:
    'Schedule a home healthcare visit with CareNest. Choose your service, city, and preferred date—or reach our team instantly on WhatsApp.',
};

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main>
        <AppointmentPage />
      </main>
      <Footer />
    </>
  );
}
