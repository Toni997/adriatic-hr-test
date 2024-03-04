'use client'

import React from 'react'
import ReservationConfirmationDetails from './ReservationConfirmationDetails'

const ReservationConfirmation = () => {
  return (
    <>
      <h1 className='text-2xl border-purple-900 border-b-2 mb-4 pb-2'>
        Potvrda Rezervacije
      </h1>
      <div className=''>
        <ReservationConfirmationDetails />
      </div>
    </>
  )
}

export default ReservationConfirmation
