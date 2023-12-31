import './globals.css'
import type { Metadata } from 'next'
import { Cookie, Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/services/auth'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'], variable: "--inter-font" })
const cookieFont = Cookie({ subsets: ['latin'], weight: ['400'], variable: "--cookie-font" })

export const metadata: Metadata = {
  title: 'Dev New Tab',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="pt-BR" className={`${inter.variable} ${cookieFont.variable}`}>
      <body className="min-h-screen bg-zinc-950 text-white">
        <Header session={session} />

        {children}
      </body>
    </html>
  )
}
