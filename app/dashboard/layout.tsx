import Image from 'next/image'
import { NavigationPanel } from './navigationPanel'
import logo from '@public/logo.svg'
import './styles.css'
import { NavButton } from './navButton'

interface IDashboardLayout {
  children: React.ReactNode
}

const DashboardLayout: React.FC<IDashboardLayout> = ({ children }) => {
  return (
    <div>
      <header>
        <div className='logo_wrapper'>
          <Image src={logo} alt='wolvy logo' />
        </div>
        <NavButton>
          <NavigationPanel />
        </NavButton>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
