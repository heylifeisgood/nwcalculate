import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'New World Calculator - Crafting & Trading Tools',
  description: 'Comprehensive calculator tools for New World game - crafting costs, trading post profits, gear score, and more',
  keywords: 'new world, calculator, crafting, trading, mmorpg, tools',
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
