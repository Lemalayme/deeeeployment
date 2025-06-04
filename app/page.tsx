import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AboutUs } from '@/components/AboutUs';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
export const metadata = {
  title: "Главная | Дмитровдор - Профессиональное строительство дорог",
  description: "ООО 'Дмитровдор': строительство, ремонт и асфальтирование дорог...",
  icons: {
    icon: '/favicon.ico', 
    shortcut: '/favicon-16x16.png', 
    apple: '/apple-touch-icon.png', 
  },
  openGraph: {
    title: "Главная | Дмитровдор - Строительство дорог",
    description: "Профессиональные дорожные работы...",
    images: [
      {
        url: '/Dmitrovdor.svg', // Абсолютный URL!
        width: 1200,
        height: 630,
        alt: 'Дмитровдор - строительство дорог',
      }
    ]
  }
};

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <AboutUs />
        <Services />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}