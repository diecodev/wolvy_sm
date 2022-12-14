import { Header } from '@components/header'
import { Hero } from '@components/hero'
import { InfoSection } from './components/info_section'

const HomePage: React.FC = () => {
  return (
    <div className='home_container'>
      <Header />
      <div className='main_container'>
        <Hero />
        <InfoSection />
      </div>
      <iframe src='https://snazzymaps.com/embed/446233' width='100%' height='400px' style={{ border: 'none' }} />
    </div>
  )
}

export default HomePage
