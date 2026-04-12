import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ContactPage from '@/components/contact/ContactPage';

export const metadata = {
  title: 'Contact Us | CareNest Pakistan',
  description:
    'Reach the Clinical Atelier—email, phone, or WhatsApp. Visit our Islamabad HQ or send a message for personalized home healthcare in Pakistan.',
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
