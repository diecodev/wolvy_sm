import wolvy_smoke from '@public/wolvy_smoke.jpg'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@styles/socials.module.css'
import { Instagram, Web, WhatsApp } from '@components/icons'

const socialMediaLinks = [
  {
    id: 0,
    name: 'Instagram',
    path: '/instagram',
    icon: <Instagram width={18} />
  },
  {
    id: 1,
    name: 'WhatsApp',
    path: '/whatsapp',
    icon: <WhatsApp width={18} />
  },
  {
    id: 2,
    name: 'Nuestra web',
    path: '/',
    icon: <Web width={18} />
  }
]

const SocialMediaPage: React.FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.logo_links_container}>
        <div className={styles.image_title}>
          <div className={styles.image_container}>
            <Image src={wolvy_smoke} alt='wolvy logo' priority />
          </div>
          <h1>WOLVY</h1>
        </div>
        <div className={styles.socials_container}>
          {
          socialMediaLinks.map(({ icon, id, name, path }) => (
            <Link href={path} key={id}>
              <span className={styles.link}>
                {icon}
                <p>{name}</p>
              </span>
            </Link>
          ))
        }
        </div>
      </div>
      <p className={styles.footer}>AMOR POR LAS PAPAS 💖🍟</p>
    </main>
  )
}

export default SocialMediaPage
