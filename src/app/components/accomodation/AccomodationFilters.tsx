'use client'

import React, { FormEvent } from 'react'
import SelectAccomodationCapacity from './SelectAccomodationCapacity'
import { FaSearch } from 'react-icons/fa'
import SelectArrivalAndDeparture from './SelectAccomodationArrivalAndDeparture'
import SelectAmenities from './SelectAccomodationAmenities'
import { useAccomodationFiltersStore } from '@/app/stores/accomodationFiltersStore'
import { IoClose } from 'react-icons/io5'

interface AccomodationFiltersProps {
  accomodations: Accomodation[] | undefined
  updateAccomodationsFilterPredicate: UpdateAccommodationFilterPredicate
}

const AccomodationFilters = ({
  accomodations,
  updateAccomodationsFilterPredicate,
}: AccomodationFiltersProps) => {
  const { accomodationFilters, clearAllFilters } = useAccomodationFiltersStore()

  const onSubmitFilters = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!accomodations) return

    const newAccomodationFilterPredicate = (accomodation: Accomodation) => {
      let isDateRangeAvailable = true

      if (
        accomodationFilters.arrivalDate &&
        accomodationFilters.departureDate
      ) {
        isDateRangeAvailable = accomodation.availableDates.some(
          ({ intervalStart, intervalEnd }) => {
            return (
              new Date(intervalStart) <= accomodationFilters.arrivalDate! &&
              new Date(intervalEnd) >= accomodationFilters.departureDate!
            )
          }
        )
      } else if (accomodationFilters.arrivalDate) {
        isDateRangeAvailable = accomodation.availableDates.some(
          ({ intervalStart, intervalEnd }) => {
            return (
              new Date(intervalStart) <= accomodationFilters.arrivalDate! &&
              new Date(intervalEnd) > accomodationFilters.arrivalDate!
            )
          }
        )
      } else if (accomodationFilters.departureDate) {
        isDateRangeAvailable = accomodation.availableDates.some(
          ({ intervalStart, intervalEnd }) => {
            return (
              new Date(intervalStart) < accomodationFilters.departureDate! &&
              new Date(intervalEnd) >= accomodationFilters.departureDate!
            )
          }
        )
      }

      if (!isDateRangeAvailable) return false

      if (
        accomodationFilters.capacity &&
        accomodation.capacity < accomodationFilters.capacity
      )
        return false

      const matchesAmenities = Object.entries(
        accomodationFilters.amenities
      ).every(([amenity, isAvailable]) => {
        return !isAvailable || accomodation.amenities[amenity] === isAvailable
      })
      if (!matchesAmenities) return false

      return true
    }

    updateAccomodationsFilterPredicate(newAccomodationFilterPredicate)
  }

  return (
    <>
      <form onSubmit={onSubmitFilters}>
        <div className='flex items-center max-lg:flex-col gap-2 mb-2'>
          <SelectArrivalAndDeparture />
          <SelectAccomodationCapacity />
          <button
            type='submit'
            className='max-lg:hidden btn btn-primary bg-purple-500 border-none hover:bg-purple-400 duration-300'
          >
            <FaSearch />
          </button>
          <div
            className='max-lg:hidden tooltip max-lg:w-full'
            data-tip='Očisti filtere'
          >
            <button
              className='btn btn-primary m rounded-full text-black bg-red-500 border-none hover:bg-red-400 duration-300'
              onClick={clearAllFilters}
            >
              <IoClose />
            </button>
          </div>
        </div>
        <SelectAmenities />
        <button
          className='hidden max-lg:block w-full btn btn-primary mt-1 mb-3 text-black bg-red-500 border-none hover:bg-red-400 duration-300'
          onClick={clearAllFilters}
        >
          Očisti filtere
        </button>
        <button
          type='submit'
          className='hidden max-lg:flex justify-center w-full text-center btn btn-primary bg-purple-500 border-none hover:bg-purple-400 duration-300'
        >
          <FaSearch />
        </button>
      </form>
    </>
  )
}

export default AccomodationFilters
