import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Cinzel, Cormorant_Garamond } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { MagicalParticles } from '@/components/magical-particles'
import { GoldenSnitch } from '@/components/golden-snitch'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
})
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: 'Happy Birthday, Aditya — A Magical Memory',
  description:
    'An elegant, cinematic Harry Potter–inspired birthday experience made with love for Aditya.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f0c0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} ${cormorant.variable} bg-[#0f0c0a]`}
    >
      <body className="relative min-h-screen bg-[#0f0c0a] font-sans text-[#e7d7b6] antialiased">
        <MagicalParticles />
        <GoldenSnitch />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
