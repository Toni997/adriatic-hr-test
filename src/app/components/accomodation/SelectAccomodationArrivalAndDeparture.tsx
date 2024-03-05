'use client'

import React, { ChangeEvent, useEffect, useState } from 'react'
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

  const updateMaxArrivalDate = () => {
    if (!departureDate)
      return setMaxArrivalDate(() => MAX_POSSIBLE_ARRIVAL_DATE)

    const maxArrivalDate = new Date(departureDate.getTime())
    maxArrivalDate.setDate(maxArrivalDate.getDate() - 1)
    setMaxArrivalDate(() => formatDateForInput(maxArrivalDate))
  }

  const updateMinDepartureDate = () => {
    if (!arrivalDate)
      return setMinDepartureDate(() => MIN_POSSIBLE_DEPARTURE_DATE)

    const minDepartureDate = new Date(arrivalDate.getTime())
    minDepartureDate.setDate(minDepartureDate.getDate() + 1)
    setMinDepartureDate(() => formatDateForInput(minDepartureDate))
  }

  useEffect(() => {
    updateMinDepartureDate()
  }, [arrivalDate])

  useEffect(() => {
    updateMaxArrivalDate()
  }, [departureDate])

  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    updateDate(e.target.name, new Date(e.target.value))
  }

  return (
    <div className='flex gap-2 items-center max-lg:flex-col max-lg:w-full'>
      <DatePicker
        date={arrivalDate}
        minDate={MIN_AVAILABLE_DATE}
        maxDate={maxArrivalDate}
        onDateChange={onChangeDate}
        name='arrivalDate'
      />
      <span>do</span>
      <DatePicker
        date={departureDate}
        minDate={minDepartureDate}
        maxDate={MAX_AVAILABLE_DATE}
        onDateChange={onChangeDate}
        name='departureDate'
      />
    </div>
  )
}

export default SelectAccomodationArrivalAndDeparture
