import { formatDateForOutput } from '@/app/helpers'
import { useReservationDetailsStore } from '@/app/stores/reservationDetailsStore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const ReservationConfirmationDetails = () => {
  const { reservationDetails } = useReservationDetailsStore()
  const router = useRouter()

  if (!reservationDetails) router.push('/')

  return (
    <>
      {reservationDetails && (
        <table className='table mb-3'>
          <tbody>
            <tr className='hover border-b-purple-700 hover:!bg-purple-700'>
              <td className='font-bold'>Naziv:</td>
              <td>{reservationDetails.accomodationTitle}</td>
            </tr>
            <tr className='hover border-b-purple-700 hover:!bg-purple-700'>
              <td className='font-bold'>Datum dolaska:</td>
              <td>{formatDateForOutput(reservationDetails.arrivalDate)}</td>
            </tr>
            <tr className='hover border-b-purple-700 hover:!bg-purple-700'>
              <td className='font-bold'>Datum odlaska:</td>
              <td>{formatDateForOutput(reservationDetails.departureDate)}</td>
            </tr>
            <tr className='hover border-b-purple-700 hover:!bg-purple-700'>
              <td className='font-bold'>Broj osoba:</td>
              <td>{reservationDetails.numberOfPeople}</td>
            </tr>
            <tr className='hover border-b-purple-700 hover:!bg-purple-700'>
              <td className='font-bold'>Konačna cijena:</td>
              <td>{reservationDetails.totalPriceInEuros},00 €</td>
            </tr>
          </tbody>
        </table>
      )}
      <Link href='/' className='btn btn-ghost text-xl bg-purple-800 hover:bg-purple-900'>
        Natrag
      </Link>
    </>
  )
}

export default ReservationConfirmationDetails
