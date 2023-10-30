import './globals.css'
import type { Metadata } from 'next'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/Footer'
import React from 'react'

export const metadata: Metadata = {
  title: '信基診所',
  description: '創新醫療，為您效勞',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{fontFamily: "'Noto Sans TC', sans-serif;"}} className={` w-full`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}