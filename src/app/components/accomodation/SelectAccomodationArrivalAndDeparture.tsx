'use client'

import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from 'react'
import DatePicker from '../common/DatePicker'
import { formatDateForInput } from '@/app/helpers'
import {
  MAX_AVAILABLE_DATE,
  MAX_POSSIBLE_ARRIVAL_DATE,
  MIN_AVAILABLE_DATE,
  MIN_POSSIBLE_DEPARTURE_DATE,
} from '@/app/constants'
import { useAccomodationFiltersStore } from '@/app/stores/accomodationFiltersStore'

const SelectAccomodationArrivalAndDeparture = () => {
  const {
    accomodationFilters: { arrivalDate, departureDate },
    updateDate,
  } = useAccomodationFiltersStore()

  const [maxArrivalDate, setMaxArrivalDate] = useState(
    MAX_POSSIBLE_ARRIVAL_DATE
  )
  const [minDepartureDate, setMinDepartureDate] = useState(
    MIN_POSSIBLE_DEPARTURE_DATE
  )

  const updateMaxArrivalDate = (departureDateValue?: string) => {
    const currentDepartureDate = departureDateValue
      ? new Date(departureDateValue)
      : departureDate
    if (!currentDepartureDate) {
      setMaxArrivalDate(() => MAX_POSSIBLE_ARRIVAL_DATE)
      return
    }

    const maxArrivalDate = new Date(currentDepartureDate.getTime())
    maxArrivalDate.setDate(maxArrivalDate.getDate() - 1)
    setMaxArrivalDate(() => formatDateForInput(maxArrivalDate))
  }

  const updateMinDepartureDate = (arrivalDateValue?: string) => {
    const currentArrivalDate = arrivalDateValue
      ? new Date(arrivalDateValue)
      : arrivalDate
    if (!currentArrivalDate) {
      setMinDepartureDate(() => MIN_POSSIBLE_DEPARTURE_DATE)
      return
    }
    const minDepartureDate = new Date(currentArrivalDate.getTime())
    minDepartureDate.setDate(minDepartureDate.getDate() + 1)
    setMinDepartureDate(() => formatDateForInput(minDepartureDate))
  }

  useEffect(() => {
    updateMaxArrivalDate()
    updateMinDepartureDate()
  }, [arrivalDate, departureDate])

  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    updateDate(e.target.name, new Date(e.target.value))
    updateMaxArrivalDate()
    updateMinDepartureDate()
  }

  return (
    <div>
      <DatePicker
        date={arrivalDate}
        minDate={MIN_AVAILABLE_DATE}
        maxDate={maxArrivalDate}
        placeholder='Datum dolaska'
        onDateChange={onChangeDate}
        name='arrivalDate'
      />
      <span className='mx-3'>do</span>
      <DatePicker
        date={departureDate}
        minDate={minDepartureDate}
        maxDate={MAX_AVAILABLE_DATE}
        placeholder='Datum odlaska'
        onDateChange={onChangeDate}
        name='departureDate'
      />
    </div>
  )
}

export default SelectAccomodationArrivalAndDeparture
