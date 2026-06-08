import type { Metadata } from "next";
import { Libre_Baskerville, Lato } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: "Verisignum | Compliance-First Retainer Billing for Elite Freelancers",
  description: "Compliance-first subscription billing designed to protect elite freelancers and their clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreBaskerville.variable} ${lato.variable}`}>
        <Header />
        <main className="container" role="main" aria-labelledby="main-heading">
          {children}
        </main>
      </body>
    </html>
  );
}
