import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "PepeToons",
  description: "Honoring Dr. José Rizal's remarkable legacy online.",
  icons: "/logo.ico",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="dark" lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
