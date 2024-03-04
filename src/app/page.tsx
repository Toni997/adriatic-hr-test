import { Metadata } from 'next'
import AccomodationsList from './components/accomodation/AccomodationsList'

export const metadata: Metadata = {
  title: 'Smještaji - Adriatic.hr',
}

const Home = async () => {
  return (
    <>
      <AccomodationsList />
    </>
  )
}

export default Home
