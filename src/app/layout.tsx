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
  metadataBase: new URL('https://wahibadiyatma.com'),
  title: {
    default: "Wahib Adiyatma - Frontend Engineer Portfolio",
    template: "%s | Wahib Adiyatma"
  },
  description: "Professional portfolio of Wahib Adiyatma, a Frontend Engineer specializing in React, React Native, and Next.js development. Currently working at Nomura Research Institute, building scalable web and mobile applications.",
  keywords: [
    "Frontend Engineer",
    "React Developer", 
    "React Native",
    "Next.js",
    "TypeScript",
    "Software Engineer",
    "Portfolio",
    "Jakarta",
    "Indonesia",
    "Nomura Research Institute",
    "Web Development",
    "Mobile Development",
    "Full Stack Developer"
  ],
  authors: [{ name: "Wahib Adiyatma", url: "https://wahibadiyatma.com" }],
  creator: "Wahib Adiyatma",
  publisher: "Wahib Adiyatma",
  applicationName: "Wahib Adiyatma Portfolio",
  category: "Technology",
  classification: "Portfolio Website",
  
  // Favicon and icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" }
    ],
    shortcut: "/favicon.ico"
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wahibadiyatma.com",
    title: "Wahib Adiyatma - Frontend Engineer Portfolio",
    description: "Professional portfolio showcasing expertise in React, React Native, Next.js, and modern web/mobile development. View my projects, experience, and technical skills.",
    siteName: "Wahib Adiyatma Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wahib Adiyatma - Frontend Engineer Portfolio"
      }
    ]
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@wahibadiyatma",
    creator: "@wahibadiyatma",
    title: "Wahib Adiyatma - Frontend Engineer Portfolio",
    description: "Professional portfolio showcasing expertise in React, React Native, Next.js development",
    images: ["/og-image.png"]
  },

  // SEO and indexing
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

  // Additional metadata
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Verification (if needed)
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code"
  },

  // Manifest for PWA
  manifest: "/manifest.json",

  // Additional meta tags
  other: {
    "msapplication-TileColor": "#8b5cf6",
    "msapplication-config": "/browserconfig.xml"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" }
  ],
  colorScheme: "dark light",
  viewportFit: "cover"
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
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
          Skip to main content
        </a>
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
