import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AboutUs } from '@/components/AboutUs';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: "Главная | Дмитровдор - Профессиональное строительство дорог",
  description: "ООО 'Дмитровдор': строительство, ремонт и асфальтирование дорог в Московской области. Работаем с 2012 года. Гарантия качества работ.",
  openGraph: {
    title: "Главная | Дмитровдор - Строительство дорог",
    description: "Профессиональные дорожные работы в Дмитрове и Московской области",
    images: [
      {
        src: "/Dmitrovdor.svg",
        width: 1200,
        height: 630,
        alt: "Главная страница Дмитровдор",
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