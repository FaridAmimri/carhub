/** @format */

import { Navbar, Footer } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Car Hub',
  description: 'Découvre les meilleures voiture du monde'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
