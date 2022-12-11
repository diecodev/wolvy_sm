import Image from 'next/image'
import logo from '@public/logo_name.svg'
import Link from 'next/link'
import styles from '@styles/home.module.css'

export const Header: React.FC = () => {
  return (
    <header className={styles.header_wrapper}>
      <div className={styles.logo_wrapper}>
        <Image src={logo} alt='wolvy logo' />
      </div>
      <DesktopNav />
    </header>
  )
}

export const DesktopNav: React.FC = () => {
  return (
    <nav>
      <ul className={styles.menu_wrapper}>
        <li className={styles.menu_item}>
          <Link href='/#'>Home</Link>
        </li>
        <li className={styles.menu_item}>
          <Link href='/#menu'>Menu</Link>
        </li>
        <li className={`${styles.menu_item} ${styles.take_order}`}>
          <Link href='/pedido'>Pedido</Link>
        </li>
      </ul>
    </nav>
  )
}

export const TabletNav: React.FC = () => {
  return (
    <nav>
      <ul className={styles.menu_wrapper}>
        <li className={styles.menu_item}>
          <Link href='/#'>Home</Link>
        </li>
        <li className={styles.menu_item}>
          <Link href='/#menu'>Menu</Link>
        </li>
        <li className={`${styles.menu_item} ${styles.take_order}`}>
          <Link href='/pedido'>Pedido</Link>
        </li>
      </ul>
    </nav>
  )
}
