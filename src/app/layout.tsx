import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adriatic.hr',
  description:
    'Privatni smještaj i privatni apartmani u Hrvatkoj. Privatni apartmani za odmor i ljetovanje, Hrvatska. Ponuda apartmana i on-line rezervacija smještaja u privatnim apartmanima, Hrvatska.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <main className='p-7 max-w-[1000px] m-auto shadow-lg shadow-purple-900'>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
