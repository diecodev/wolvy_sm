import { Location } from 'app/components/icons'
import styles from '@styles/home.module.css'
import Link from 'next/link'

export const Hero: React.FC = () => {
  return (
    <main className={styles.hero_wrapper}>
      <div className={styles.hero_content_wrapper}>
        <h1 aria-label='BIENVENIDO A WOLVY' className={styles.hero_title_wrapper}>
          <span className={styles.hero_title}>BIENVENIDO</span>
          <span className={styles.hero_title}>A</span>
          <span className={`${styles.hero_title} ${styles.hero_title_yellow}`}>WOLVY</span>
        </h1>
        <p className={styles.hero_description}>
          El lugar donde se siente el amor por las papas
        </p>
      </div>
      <div className={styles.hero_links_wrapper}>
        <Link href='/pedido' className={`${styles.hero_link} ${styles.hero_link_take_order}`}>Hacer pedido</Link>
        <Link href='/#menu' className={`${styles.hero_link} ${styles.hero_link_outline}`}>Ver menú</Link>
      </div>
      <span className={styles.hero_location}>
        <Location width={12} />
        <p>Diagonal a mood cocktails - Afuera de discobar Otto</p>
      </span>
    </main>
  )
}
