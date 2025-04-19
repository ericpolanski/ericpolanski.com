import { Inter } from "next/font/google";
import "./globals.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* Main content landmark for accessibility */}
        <main id="main" className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
