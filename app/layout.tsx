import Navigation from '@/components/Navigation';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gadolinium.org'),
  title: {
    default:
      'Gadolinium Toxicity Resources | Leading Doctors, Clinics & Support Groups',
    template: '%s | Gadolinium.org',
  },
  description:
    'Comprehensive resource guide for gadolinium toxicity. Find leading medical professionals including Dr. Semelka (IV Chelation), Dr. Wagner (Kidney), and Dr. Catriona Walsh (Nutrition). Discover chelation clinics and connect with support groups.',
  keywords: [
    'gadolinium toxicity',
    'gadolinium detox',
    'MRI contrast toxicity',
    'gadolinium chelation',
    'gadolinium doctors',
    'gadolinium treatment',
    'gadolinium support groups',
    'Dr. Semelka',
    'Dr. Wagner',
    'Dr. Catriona Walsh',
    'chelation therapy',
    'gadolinium removal',
    'Gadolinium Deposition Disease',
    'GDD',
    'gadolinium-based contrast agents',
    'GBCA toxicity',
    'gadolinium symptoms',
    'gadolinium detoxification',
  ],
  authors: [{ name: 'Gadolinium.org' }],
  creator: 'Gadolinium.org',
  publisher: 'Gadolinium.org',
  category: 'Health & Medical',
  classification: 'Medical Information Resource',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gadolinium.org',
    siteName: 'Gadolinium Toxicity Resources',
    title:
      'Gadolinium Toxicity Resources | Leading Doctors, Clinics & Support Groups',
    description:
      'Comprehensive resource guide for gadolinium toxicity. Find leading medical professionals, chelation clinics, and support communities.',
    images: [
      {
        url: '/mri.webp',
        width: 1200,
        height: 630,
        alt: 'Gadolinium Toxicity Resources',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Gadolinium Toxicity Resources | Leading Doctors, Clinics & Support Groups',
    description:
      'Comprehensive resource guide for gadolinium toxicity. Find leading medical professionals, chelation clinics, and support communities.',
    images: ['/mri.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  },
  alternates: {
    canonical: 'https://gadolinium.org',
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='theme-color' content='#007aff' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a
          href='#main-content'
          className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
          Skip to main content
        </a>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
