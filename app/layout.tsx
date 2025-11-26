import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://travukwik.com'),
  title: {
    default: 'Travukwik | Travel Quick, Travel Smart',
    template: '%s | Travukwik'
  },
  description: 'Experience seamless travel planning with Travukwik. From Lagos to the world, we handle your flights, visas, and holidays so you can focus on the memories.',
  keywords: [
    'travel agency',
    'flight booking',
    'visa assistance',
    'hotel reservations',
    'holiday packages',
    'Lagos travel agency',
    'Nigeria travel',
    'international flights',
    'travel planning',
    'vacation packages'
  ],
  authors: [{ name: 'Travukwik' }],
  creator: 'Travukwik',
  publisher: 'Travukwik',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://travukwik.com',
    siteName: 'Travukwik',
    title: 'Travukwik | Travel Quick, Travel Smart',
    description: 'Experience seamless travel planning with Travukwik. From Lagos to the world, we handle your flights, visas, and holidays so you can focus on the memories.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Travukwik - Your Gateway to the World',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travukwik | Travel Quick, Travel Smart',
    description: 'Experience seamless travel planning with Travukwik. From Lagos to the world, we handle your flights, visas, and holidays.',
    images: ['/og-image.jpg'],
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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Travukwik',
    description: 'Experience seamless travel planning with Travukwik. From Lagos to the world, we handle your flights, visas, and holidays.',
    url: 'https://travukwik.com',
    logo: 'https://travukwik.com/travukwik-logo4.png',
    image: 'https://travukwik.com/og-image.jpg',
    telephone: '+234-909-512-1909',
    email: 'info@travukwik.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9 Bode Thomas St, Surulere',
      addressLocality: 'Lagos',
      addressCountry: 'Nigeria',
    },
    sameAs: [
      'https://www.facebook.com/travukwik',
      'https://www.instagram.com/travukwikltd/',
    ],
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria',
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
