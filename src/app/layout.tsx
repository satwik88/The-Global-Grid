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
import "./globals.css";

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
  metadataBase: new URL("https://theglobalgrid.com"),
  title: {
    default: "The Global Grid — The Daily Paper for the Modern World",
    template: "%s | The Global Grid",
  },
  description:
    "A premium international digital newspaper combining the elegance of traditional print journalism with modern web technology.",
  openGraph: {
    title: "The Global Grid",
    description: "The Daily Paper for the Modern World",
    type: "website",
    siteName: "The Global Grid",
  },
  twitter: {
    card: "summary_large_image",
    site: "@theglobalgrid",
    title: "The Global Grid",
    description: "The Daily Paper for the Modern World",
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
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                let isDark = false;
                const storedTheme = localStorage.getItem('theme');
                if (storedTheme) {
                  isDark = storedTheme === 'dark';
                } else {
                  const currentHour = new Date().getHours();
                  isDark = window.matchMedia('(prefers-color-scheme: dark)').matches || currentHour >= 18;
                }
                if (isDark) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="paper-texture min-h-screen antialiased transition-colors duration-500">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:uppercase focus:tracking-widest"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <SearchShortcut />
          <NewspaperProvider>
            <div id="main-content">{children}</div>
          </NewspaperProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
