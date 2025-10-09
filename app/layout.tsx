import "./global.css";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Syne } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";
import ProfileSidebar from './components/profile-sidebar';
import { LanguageProvider } from './context/language-context';
import BackToTop from './components/back-to-top';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bricolage',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Milica Krivokapic | Portfolio",
  description: "Milica Krivokapic's portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${syne.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/photos/favicon.png" />
        <link rel="shortcut icon" href="/photos/favicon.ico" />
        <link rel="icon" type="image/png" sizes="96x96" href="/photos/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/photos/apple-touch-icon.png" />
        <link rel="manifest" href="/photos/web-app-manifest-192x192.png" />
      </head>
      <body className="antialiased font-sans bg-background-light dark:bg-background-dark text-primary-light dark:text-primary-dark">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <LanguageProvider>
            <div className="min-h-screen md:flex md:items-start md:justify-center md:gap-8 [--header-h:5.6rem] 2xl:px-0">
              
                <ProfileSidebar />
              
              <main className="flex flex-col justify-center">
                <Navbar />
                {children}
                <Footer />
                <BackToTop />
              </main>
              <Analytics />
              <SpeedInsights />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
