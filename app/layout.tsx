import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/Footer'

export const serifKorean = localFont({
  src: [
    {
      path: './fonts/Serif-Korean/extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Serif-Korean/light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Serif-Korean/regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Serif-Korean/medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Serif-Korean/semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Serif-Korean/bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Serif-Korean/heavy.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  display:'swap',
  variable: '--font-serif-korean',
})

export const sansKorean = localFont({
  src: [
    {
      path: './fonts/Sans-Korean/extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Sans-Korean/light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Sans-Korean/normal.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Sans-Korean/medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Sans-Korean/bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Sans-Korean/heavy.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  display:'swap',
  variable: '--font-sans-korean',
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
      <body className={sansKorean.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}