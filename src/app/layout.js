import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eric Polanski",
  description: "Eric Polanski Portfolio Website",
  keywords: "Eric Polanski, Portfolio, Web Developer, Software Engineer, Next.js, React, JavaScript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" data-mode="default">
      <body className={inter.className}>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
