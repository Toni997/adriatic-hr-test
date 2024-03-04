'use client'

import React, { ChangeEvent, FormEvent, useEffect } from 'react'
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
  const {
    accomodationFilters,
    updateAmenity,
    updateCapacity,
    updateDate,
    clearAllFilters,
  } = useAccomodationFiltersStore()

  const onSubmitFilters = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!accomodations) return

    // const newAccomodationFilterPredicate = (accomodation: Accomodation) => {
    //   let isDateRangeAvailable = true

    //   if (
    //     accomodationFilters.arrivalDate &&
    //     accomodationFilters.departureDate
    //   ) {
    //     isDateRangeAvailable = accomodation.availableDates.some(
    //       ({ intervalStart, intervalEnd }) => {
    //         return (
    //           new Date(intervalStart) <= accomodationFilters.arrivalDate! &&
    //           new Date(intervalEnd) >= accomodationFilters.departureDate!
    //         )
    //       }
    //     )
    //   } else if (accomodationFilters.arrivalDate) {
    //     isDateRangeAvailable = accomodation.availableDates.some(
    //       ({ intervalStart, intervalEnd }) => {
    //         return (
    //           new Date(intervalStart) <= accomodationFilters.arrivalDate! &&
    //           new Date(intervalEnd) > accomodationFilters.arrivalDate!
    //         )
    //       }
    //     )
    //   } else if (accomodationFilters.departureDate) {
    //     isDateRangeAvailable = accomodation.availableDates.some(
    //       ({ intervalStart, intervalEnd }) => {
    //         return (
    //           new Date(intervalStart) < accomodationFilters.departureDate! &&
    //           new Date(intervalEnd) >= accomodationFilters.departureDate!
    //         )
    //       }
    //     )
    //   }

    //   if (!isDateRangeAvailable) return false

    //   if (
    //     accomodationFilters.capacity &&
    //     accomodation.capacity < accomodationFilters.capacity
    //   )
    //     return false

    //   const amenitiesKeys = Object.keys(accomodationFilters.amenities)
    //   const matchesAmenities = amenitiesKeys.every((key) => {
    //     if (!accomodationFilters.amenities[key]) return true

    //     return (
    //       accomodationFilters.amenities[key] === accomodation.amenities[key]
    //     )
    //   })
    //   if (!matchesAmenities) return false

    //   return true
    // }

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
      ).every(([key, value]) => {
        return !value || accomodation.amenities[key] === value
      })
      if (!matchesAmenities) return false

      return true
    }

    updateAccomodationsFilterPredicate(newAccomodationFilterPredicate)
  }

  return (
    <>
      <form onSubmit={onSubmitFilters}>
        <div className='flex items-center'>
          <SelectArrivalAndDeparture />
          <div className='ml-3'>
            <SelectAccomodationCapacity />
          </div>
          <button
            type='submit'
            className='btn btn-primary ml-3 bg-purple-500 border-none hover:bg-purple-400 duration-300'
          >
            <FaSearch />
          </button>
          <div className='tooltip ml-3' data-tip='Očisti filtere'>
            <button
              className='btn btn-primary rounded-full text-black bg-red-500 border-none hover:bg-red-400 duration-300'
              onClick={clearAllFilters}
            >
              <IoClose />
            </button>
          </div>
        </div>
        <div className='mt-2'>
          <SelectAmenities />
        </div>
      </form>
    </>
  )
}

export default AccomodationFilters
