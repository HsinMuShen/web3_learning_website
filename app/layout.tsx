import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-merriweather',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Learn Bitcoin & Web3 - Made Simple',
    template: '%s | Learn Bitcoin & Web3',
  },
  description: 'Learn Bitcoin and Web3 fundamentals in simple, beginner-friendly language. Perfect for absolute beginners with zero prior knowledge.',
  keywords: ['Bitcoin', 'Web3', 'Blockchain', 'Education', 'Beginners'],
  authors: [{ name: 'Web3 Learning' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://web3learning.com',
    siteName: 'Learn Bitcoin & Web3',
    title: 'Learn Bitcoin & Web3 - Made Simple',
    description: 'Learn Bitcoin and Web3 fundamentals in simple, beginner-friendly language.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn Bitcoin & Web3 - Made Simple',
    description: 'Learn Bitcoin and Web3 fundamentals in simple, beginner-friendly language.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

