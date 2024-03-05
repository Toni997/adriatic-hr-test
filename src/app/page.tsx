import { Metadata } from 'next'
import AccomodationsList from './components/accomodation/AccomodationsList'

export const metadata: Metadata = {
  title: 'Smještaji - Adriatic.hr',
}

const Home = async () => {
  return (
    <>
      <h1 className='text-2xl border-purple-900 border-b-2 mb-4 pb-2'>
        Smještaji
      </h1>
      <AccomodationsList />
    </>
  )
}

export default Home
