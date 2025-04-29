import "./global.css";
import type { Metadata } from "next";
import { Inter, Syne } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";
import ProfileSidebar from './components/profile-sidebar';
import { LanguageProvider } from './context/language-context';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
    <html lang="en" className={`${inter.variable} ${syne.variable}`} suppressHydrationWarning>
      <body className="antialiased font-sans bg-background-light dark:bg-background-dark text-primary-light dark:text-primary-dark">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <LanguageProvider>
            <div className="min-h-screen">
              <ProfileSidebar />
              <main className="md:ml-[400px]">
                <Navbar />
                {children}
                <Footer />
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
