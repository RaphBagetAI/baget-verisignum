import type { Metadata } from "next";
import { Libre_Baskerville, Lato } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Verisignum | Compliance-First Retainer Billing for Elite Freelancers",
  description: "A simple SaaS where freelancers track their client invoices, clients sign up and pay a monthly retainer online, and everyone gets email receipts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} ${lato.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
