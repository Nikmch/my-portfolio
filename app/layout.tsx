import './globals.css';
import PrelineLoader from './components/preline-loader';
import Footer from "./components/footer";
import Header from "./components/header";

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrelineLoader />
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
