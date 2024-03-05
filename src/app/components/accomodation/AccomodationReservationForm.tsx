'use client'

import React, { FormEvent, useEffect, useMemo, useState } from 'react'
import SelectAccomodationArrivalAndDeparture from './SelectAccomodationArrivalAndDeparture'
import SelectAccomodationCapacity from './SelectAccomodationCapacity'
import { useAccomodationFiltersStore } from '@/app/stores/accomodationFiltersStore'
import { FaInfoCircle } from 'react-icons/fa'
import { useReservationDetailsStore } from '@/app/stores/reservationDetailsStore'
import { redirect, useRouter } from 'next/navigation'

interface AccomodationReservationFormProps {
  maxNumberOfPeople: number
  pricelistInEuros: PriceInEuros[]
  availableDates: AvailableDate[]
  accomodationId: number
  accomodationTitle: string
}

const AccomodationReservationForm = ({
  maxNumberOfPeople,
  pricelistInEuros,
  availableDates,
  accomodationId,
  accomodationTitle,
}: AccomodationReservationFormProps) => {
  const router = useRouter()

  const { updateReservationDetails } = useReservationDetailsStore()

  const {
    accomodationFilters: {
      arrivalDate,
      departureDate,
      capacity: numberOfPeople,
    },
  } = useAccomodationFiltersStore()
  const [error, setError] = useState<string | null>(null)

  const [totalPriceInEuros, setTotalPriceInEuros] = useState<number | null>(
    null
  )

  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    calculateTotalPrice()
  }, [arrivalDate, departureDate])

  const minPrice = Math.min(...pricelistInEuros.map((p) => p.pricePerNight))
  const maxPrice = Math.max(...pricelistInEuros.map((p) => p.pricePerNight))

  const areDatesSelected = !!arrivalDate && !!departureDate

  const onSubmitReservation = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(() => true)
    updateReservationDetails({
      accomodationId: accomodationId,
      accomodationTitle: accomodationTitle,
      arrivalDate: arrivalDate!,
      departureDate: departureDate!,
      numberOfPeople: numberOfPeople,
      totalPriceInEuros: totalPriceInEuros!,
    })

    router.push('/accomodation/reservation-confirmation')
  }

  useEffect(() => {
    setError(() => null)
    setTotalPriceInEuros(() => null)

    if (!areDatesAvailable) {
      setTotalPriceInEuros(() => null)
      if (arrivalDate && departureDate)
        setError(() => 'Datumi boravka nisu dostupni')
    } else {
      calculateTotalPrice()
    }
  }, [arrivalDate, departureDate])

  const areDatesAvailable = useMemo(() => {
    if (!arrivalDate || !departureDate) return false

    return availableDates.some(({ intervalStart, intervalEnd }) => {
      return (
        new Date(intervalStart) <= arrivalDate! &&
        new Date(intervalEnd) >= departureDate!
      )
    })
  }, [arrivalDate, departureDate])

  const getNumberOfOverlappingNights = (
    pricelist: PriceInEuros,
    arrivalDate: Date,
    departureDate: Date
  ) => {
    const intervalStart = new Date(pricelist.intervalStart)
    const intervalEnd = new Date(pricelist.intervalEnd)

    if (intervalStart >= departureDate || intervalEnd <= arrivalDate) return 0

    const overlapStart = Math.max(
      intervalStart.getTime(),
      arrivalDate.getTime()
    )
    const overlapEnd = Math.min(intervalEnd.getTime(), departureDate.getTime())
    return Math.ceil((overlapEnd - overlapStart) / (1000 * 60 * 60 * 24))
  }

  const calculateTotalPrice = () => {
    if (!arrivalDate || !departureDate) return setTotalPriceInEuros(() => null)

    let totalPriceInEuros = 0
    pricelistInEuros.forEach((pricelist) => {
      const numberOfOverlappingNights = getNumberOfOverlappingNights(
        pricelist,
        arrivalDate,
        departureDate
      )
      totalPriceInEuros +=
        Math.max(numberOfOverlappingNights, 0) * pricelist.pricePerNight
    })
    setTotalPriceInEuros(() => totalPriceInEuros)
  }

  return (
    <form onSubmit={onSubmitReservation}>
      <div className='flex gap-2 max-lg:flex-col'>
        <SelectAccomodationArrivalAndDeparture />
        <SelectAccomodationCapacity max={maxNumberOfPeople} />
        <button
          type='submit'
          className={`btn btn-primary bg-purple-500 border-none hover:bg-purple-400 duration-300${
            isSubmitting ? ' cursor-progress' : ''
          }`}
          disabled={
            isSubmitting ||
            !!error ||
            !areDatesSelected ||
            !numberOfPeople ||
            numberOfPeople > maxNumberOfPeople ||
            !areDatesAvailable
          }
        >
          Rezerviraj
        </button>
      </div>
      <div className='mt-3 border-purple-500 border-2 p-1 rounded-md'>
        <p>
          {totalPriceInEuros !== null
            ? `Konačna cijena: ${totalPriceInEuros},00 €`
            : `Cijena po noćenju: ${minPrice},00 - ${maxPrice},00 € (Odaberite datume boravka da biste vidjeli točnu cijenu i rezervirali smještaj)`}
        </p>
      </div>
      {error && (
        <div role='alert' className='alert alert-info mt-3'>
          <FaInfoCircle />
          <span>{error}</span>
        </div>
      )}
    </form>
  )
}

export default AccomodationReservationForm
