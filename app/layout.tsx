import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const korean = localFont({
  weight:'400',
  src:'./fonts/regular.otf',
  display:'swap',
  variable: '--font-korean',
})

export const metadata: Metadata = {
  title: '信基輔療診所',
  description: '創新醫療，為您效勞',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={korean.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
