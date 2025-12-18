import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chelation Clinics - Find Treatment Centers for Gadolinium Toxicity',
  description:
    'Find chelation clinics and treatment centers for Gadolinium Deposition Disease (GDD) worldwide. Search by location, region, or specialty. Connect with leading medical professionals specializing in gadolinium toxicity treatment.',
  keywords: [
    'gadolinium chelation clinics',
    'GDD treatment centers',
    'gadolinium detox clinics',
    'chelation therapy',
    'gadolinium treatment facilities',
    'heavy metal chelation',
    'gadolinium removal clinics',
    'GadTTRAC',
    'gadolinium chelation centers',
    'DTPA chelation clinics',
    'gadolinium detoxification centers',
    'GBCA treatment facilities',
  ],
  openGraph: {
    title: 'Chelation Clinics - Find Treatment Centers for Gadolinium Toxicity',
    description:
      'Find chelation clinics and treatment centers for Gadolinium Deposition Disease (GDD) worldwide.',
    url: 'https://gadolinium.org/clinics',
    type: 'website',
    images: [
      {
        url: '/chelation.webp',
        width: 1200,
        height: 630,
        alt: 'Chelation Clinics - Find Treatment Centers for Gadolinium Toxicity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chelation Clinics - Find Treatment Centers for Gadolinium Toxicity',
    description:
      'Find chelation clinics and treatment centers for Gadolinium Deposition Disease (GDD) worldwide.',
    images: ['/chelation.webp'],
  },
  alternates: {
    canonical: 'https://gadolinium.org/clinics',
  },
};

export default function ClinicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
