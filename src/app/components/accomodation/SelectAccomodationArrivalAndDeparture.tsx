'use client'

import React, { ChangeEvent, useMemo } from 'react'
import DatePicker from '../common/DatePicker'
import { formatDateForInput } from '@/app/helpers'
import {
  MAX_AVAILABLE_DATE,
  MAX_POSSIBLE_ARRIVAL_DATE,
  MILLISECONDS_PER_DAY,
  MIN_AVAILABLE_DATE,
  MIN_POSSIBLE_DEPARTURE_DATE,
} from '@/app/constants'
import { useAccomodationFiltersStore } from '@/app/stores/accomodationFiltersStore'

const SelectAccomodationArrivalAndDeparture = () => {
  const {
    accomodationFilters: { arrivalDate, departureDate },
    updateDate,
  } = useAccomodationFiltersStore()

  const maxArrivalDate = !departureDate
    ? MAX_POSSIBLE_ARRIVAL_DATE
    : formatDateForInput(
        new Date(departureDate.getTime() - MILLISECONDS_PER_DAY)
      )

  const minDepartureDate = !arrivalDate
    ? MIN_POSSIBLE_DEPARTURE_DATE
    : formatDateForInput(new Date(arrivalDate.getTime() + MILLISECONDS_PER_DAY))

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
