import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Sanctuary from '@/components/Sanctuary/Sanctuary';
import Journey from '@/components/Journey/Journey';
import Testimonial from '@/components/Testimonial/Testimonial';
import Coverage from '@/components/Coverage/Coverage';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Sanctuary />
        <Journey />
        <Testimonial />
        <Coverage />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
