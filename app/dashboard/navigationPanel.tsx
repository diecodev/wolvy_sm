import Link from 'next/link'
import styles from './navbar.module.css'

interface INavLinks {
  id: string
  name: string
  path: string
}

const navLinks: INavLinks[] = [
  {
    id: '0',
    name: 'Dashboard',
    path: '/dashboard'
  },
  {
    id: '1',
    name: 'Pedidos',
    path: '/dashboard/pedidos'
  },
  {
    id: '2',
    name: 'Productos',
    path: '/dashboard/productos'
  },
  {
    id: '3',
    name: 'Facturas',
    path: '/dashboard/facturas'
  }
]

export const NavigationPanel: React.FC = () => {
  return (
    <ul className={styles.links_wrapper}>
      {navLinks.map(({ id, name, path }) => (
        <li key={id}>
          <Link href={path}>
            <p>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
