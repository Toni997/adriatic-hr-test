import ReservationConfirmation from '@/app/components/reservation/ReservationConfirmation'
import { useReservationDetailsStore } from '@/app/stores/reservationDetailsStore'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Potvrda rezervacije - Adriatic.hr',
}

const page = () => {
  return <ReservationConfirmation />
}

export default page
