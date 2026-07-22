import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  Source_Serif_4,
  Inter,
} from "next/font/google";
import Script from "next/script";
import { NewspaperProvider } from "@/lib/context/newspaper-context";
import { ThemeProvider } from "@/lib/context/ThemeContext";
import { SearchShortcut } from "@/components/newspaper/SearchShortcut";
import { PullToRefresh } from "@/components/ui/PullToRefresh";
import { OfflineBanner } from "@/components/ui/OfflineBanner";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: 'The Global Grid — The Daily Paper for the Modern World',
    template: '%s | The Global Grid',
  },
  description: 'The daily paper for the modern world. Premium international news across World, Business, Technology, Science, Culture and more.',
  metadataBase: new URL('https://the-global-grid.vercel.app'),
  openGraph: {
    title: 'The Global Grid',
    description: 'Premium international news across World, Business, Technology, AI, Science and Culture — updated every hour.',
    url: 'https://the-global-grid.vercel.app',
    siteName: 'The Global Grid',
    images: [
      {
        url: 'https://the-global-grid.vercel.app/og',
        width: 1200,
        height: 630,
        alt: 'The Global Grid — The daily paper for the modern world',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Global Grid',
    description: 'Premium international news across World, Business, Technology, AI, Science and Culture — updated every hour.',
    images: ['https://the-global-grid.vercel.app/og'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '8tFH9pUcf_gtGxvWBjoNWDuL7aMCEcMKbbNY7NARtHk',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${sourceSerif.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="canonical" href="https://the-global-grid.vercel.app" />
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                let isDark = false;
                const storedTheme = sessionStorage.getItem('theme');
                if (storedTheme) {
                  isDark = storedTheme === 'dark';
                } else {
                  const currentHour = new Date().getHours();
                  isDark = currentHour >= 18 || currentHour < 6;
                }
                if (isDark) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7A1F1F" />
      </head>
      <body className="paper-texture min-h-screen antialiased">
        <ServiceWorkerRegister />
        <OfflineBanner />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:uppercase focus:tracking-widest"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <SearchShortcut />
          <NewspaperProvider>
            <PullToRefresh>
              <div id="main-content">{children}</div>
            </PullToRefresh>
          </NewspaperProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
