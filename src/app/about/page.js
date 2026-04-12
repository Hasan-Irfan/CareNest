import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import AboutPage from '@/components/about/AboutPage';

export const metadata = {
  title: 'About Us | CareNest Pakistan',
  description:
    'Our journey since 2018: trusted home healthcare across Pakistan. Meet our mission, vision, leadership, and the CareNest advantage.',
};

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}
