import "./global.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "./components/nav";
import ProfileSidebar from './components/profile-sidebar';
import { LanguageProvider } from './context/language-context';
import { Syne, Inter } from 'next/font/google'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: "Milica Krivokapic | Portfolio",
  description: "Milica Krivokapic's portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${inter.variable} antialiased bg-background-light dark:bg-background-dark min-h-screen text-primary-light dark:text-primary-dark font-sans prose-h1:font-heading prose-h2:font-heading`}>
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            } catch (e) {}`
        }} />
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex min-h-screen">
              <ProfileSidebar />
              <div className="flex-1 md:ml-[400px]">
                <div className="md:hidden h-20"/> {/* Spacer for mobile card */}
                <Navbar />
                <main className="px-4 md:px-20 py-8 md:py-20 max-w-4xl">
                  {children}
                </main>
              </div>
            </div>
            <Analytics />
            <SpeedInsights />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
