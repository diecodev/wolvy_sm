import { WolvyTheeth, Instagram, WhatsApp } from '@components/icons'
import styles from '@styles/home.module.css'
import Link from 'next/link'
import { Carousel } from './carousel'

const list = [
  {
    id: 0,
    message: 'Papas de excelente calidad.'
  },
  {
    id: 1,
    message: 'Los toppings que desees.'
  },
  {
    id: 2,
    message: 'Las proteínas que más te gusten.'
  },
  {
    id: 3,
    message: 'Las mejores salsas.'
  },
  {
    id: 4,
    message: 'y mucho más.'
  }
]

const socialMedia = [
  {
    id: 0,
    icon: <Instagram width={18} />,
    link: '/instagram',
    description: 'wolvy_sm'
  },
  {
    id: 1,
    icon: <WhatsApp width={18} />,
    link: '/whatsapp',
    description: '310 2629919'
  }
]

export const InfoSection: React.FC = () => {
  return (
    <section className={styles.section_wrapper}>
      <h3 className={`${styles.title_lg} ${styles.hero_title_yellow}`}>COMPLACE TU PALADAR CON UN WOLVY</h3>
      <div className={styles.info_wrapper}>
        <div className={styles.info_list_wrapper_gap}>
          <ul className={styles.info_list_wrapper}>
            {
            list.map((item) => (
              <li key={item.id}>
                <WolvyTheeth width={18} />
                <p>{item.message}</p>
              </li>
            ))
          }
          </ul>
          <div className={styles.info_list_footer}>
            {
            socialMedia.map((item) => (
              <Link href={item.link} target='_blank' rel='noopener noreferrer' key={item.id}>
                <span>
                  {item.icon}
                  <p>{item.description}</p>
                </span>
              </Link>
            ))
            }
          </div>
        </div>
        <Carousel />
      </div>
    </section>
  )
}
