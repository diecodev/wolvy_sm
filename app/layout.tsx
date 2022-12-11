import { FC } from 'react'
import { Inter } from '@next/font/google'
import '@styles/globals.css'
import { Logo } from '@components/icons'

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
        <main>
          <Logo className='bg_logo' />
          <div className='bg_rounded bg_rounded--grey200' />
          <div className='bg_rounded bg_rounded--red150' />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
