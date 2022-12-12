import { FC } from 'react'
import { Inter } from '@next/font/google'
import '@styles/globals.css'

const inter = Inter({
  display: 'swap',
  preload: true,
  subsets: ['latin'],
  adjustFontFallback: true,
  weight: ['400', '500', '600', '800']
})

interface IRootLayout {
  children: React.ReactNode
}

const RootLayout: FC<IRootLayout> = ({ children }) => {
  return (
    <html lang='es' className={inter.className} style={inter.style}>
      <head />
      <body>
        <div className='radial_gradient radial_gradient--one' />
        <div className='radial_gradient radial_gradient--two' />
        <div className='home_container'>
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout
