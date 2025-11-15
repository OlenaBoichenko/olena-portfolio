import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Olena Boichenko | Full Stack Developer',
  description: 'Portfolio of Olena Boichenko - Full Stack Developer based in Victoria, BC, Canada',
  keywords: ['developer', 'full stack', 'React', 'Next.js', 'TypeScript', 'Node.js'],
  authors: [{ name: 'Olena Boichenko' }],
  creator: 'Olena Boichenko',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark">
          <Navigation />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
