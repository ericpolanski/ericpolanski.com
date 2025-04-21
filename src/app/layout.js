import { Inter } from "next/font/google";
import "./globals.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { cookies } from 'next/headers';
import { Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const runtime = 'edge';
export const metadata = {
  title: "Eric Polanski",
  description: "Eric Polanski Portfolio Website",
  keywords: "Eric Polanski, Portfolio, Web Developer, Software Engineer, Next.js, React, JavaScript",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  // Ensure responsive behavior on mobile devices
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
  // Read theme from cookie for initial SSR render
  const cookieStore = cookies();
  const themeCookie = cookieStore.get('theme')?.value;
  // Only use valid values
  const initialTheme = themeCookie === 'dark' || themeCookie === 'light' ? themeCookie : undefined;
  return (
    <html lang="en" data-theme={initialTheme}>
      <body className={inter.className}>
        {/* Skip link for keyboard and screen-reader users */}
        <a
          href="#main"
          className="fixed top-0 left-0 transform -translate-y-full focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary bg-primary text-onPrimary px-4 py-2 z-50"
        >
          Skip to main content
        </a>
        <Header />
        {/* Main content landmark for accessibility */}
        <main id="main" className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
