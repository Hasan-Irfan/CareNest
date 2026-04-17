import './globals.css';
import { Inter, Playfair_Display, Noto_Serif, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata = {
  title: 'CareNest Pakistan',
  description:
    'Experience private medical excellence without leaving your residence. PMDC certified elite staff provides hospital-grade treatment within the sanctuary of your own home. Serving Lahore, Karachi & Islamabad.',
  keywords: [
    'home healthcare Pakistan',
    'premium nursing care',
    'doctor home visits Lahore',
    'CareNest',
    'PMDC certified healthcare',
    'home medical services',
    'elderly care Pakistan',
  ],
  openGraph: {
    title: 'CareNest Pakistan | Premium Home Healthcare',
    description:
      'Hospital-grade treatment within your home. PMDC certified medical staff across Pakistan.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'CareNest Pakistan',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${notoSerif.variable} ${plusJakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
