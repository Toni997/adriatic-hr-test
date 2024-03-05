import ReservationConfirmation from '@/app/components/reservation/ReservationConfirmation'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Potvrda rezervacije - Adriatic.hr',
}

const page = () => {
  return <ReservationConfirmation />
}

export default page
