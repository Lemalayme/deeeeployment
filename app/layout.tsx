
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "ООО 'Дмитровдор' - Строительство дорог в Московской области",
    template: "%s | Дмитровдор"
  },
  description: "Профессиональное строительство и ремонт дорог от ООО 'Дмитровдор'. Работаем в Московской области с 2012 года. Гарантия качества.",
  keywords: ["строительство дорог", "ремонт дорог", "асфальтирование", "дорожные работы", "Дмитровдор", "Московская область"],
  
  // Open Graph и соцсети
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://dmitrovdor.vercel.app/",
    siteName: "Дмитровдор",
    images: [{
      url: "/Dmitrovdor.svg",
      alt: "ООО Дмитровдор - Строительство дорог",
    }]
  },

  
  // Иконки и PWA
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" }
    ]
  },
  
  // Robots и индексация
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large"
    }
  },
  
  // Дополнительные мета
  authors: [{ name: "ООО 'Дмитровдор'", url: "https://dmitrovdor.ru/" }],
  category: "construction",
  manifest: "/manifest.ts",
};

export const viewport: Viewport = {
  themeColor: "#0a7c3f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}