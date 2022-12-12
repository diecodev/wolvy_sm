'use client'

import Image from 'next/image'
import styles from '@styles/home.module.css'
import { useState, useEffect } from 'react'
import wolvyCone1 from '@public/wolvy_cone_1.png'
import wolvyCone2 from '@public/wolvy_cone_2.png'
import wolvyCone3 from '@public/wolvy_cone_3.png'
import wolvyCone4 from '@public/wolvy_cone_4.png'
import Link from 'next/link'

const wolvyCones = [wolvyCone1, wolvyCone2, wolvyCone3, wolvyCone4]

export const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const selectedImage = (index: number): void => {
    setLoaded(false)
    setTimeout(() => {
      if (index < wolvyCones.length - 1) {
        setIndex(prev => prev + 1)
      } else {
        setIndex(0)
      }
    }, 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      selectedImage(index)
    }, 2000)

    return () => clearInterval(interval)
  }, [index])

  return (
    <span className={styles.carousel}>
      <Link href='/instagram' target='_blank' rel='noopener noreferrer'>
        <Image src={wolvyCones[index]} alt='cono wolvy' onLoad={() => setLoaded(true)} className={`${styles.carousel_photo} ${loaded ? styles.carousel_photo_loaded : ''}`} />
      </Link>
    </span>
  )
}
