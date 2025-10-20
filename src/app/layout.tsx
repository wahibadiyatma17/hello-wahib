import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Wahib Adiyatma - Frontend Engineer Portfolio",
  description: "Professional portfolio presentation of Wahib Adiyatma, a Frontend Engineer specializing in React, React Native, and Next.js development. Currently working at Nomura Research Institute.",
  keywords: ["Frontend Engineer", "React Developer", "React Native", "Next.js", "TypeScript", "Portfolio", "Jakarta", "Indonesia"],
  authors: [{ name: "Wahib Adiyatma", url: "https://wahibadiyatma.com" }],
  creator: "Wahib Adiyatma",
  publisher: "Wahib Adiyatma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wahibadiyatma.com",
    title: "Wahib Adiyatma - Frontend Engineer Portfolio",
    description: "Professional portfolio presentation showcasing expertise in modern web and mobile development",
    siteName: "Wahib Adiyatma Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Wahib Adiyatma - Frontend Engineer Portfolio",
    description: "Professional portfolio presentation showcasing expertise in modern web and mobile development"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
