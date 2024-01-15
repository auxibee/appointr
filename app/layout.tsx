import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './ui/global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Appointr | Your appointment management system',
  description: 'A fullstack application for managing appointment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
