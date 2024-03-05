'use client'

import React, { useMemo, useState } from 'react'
import AccomodationItem from './AccomodationItem'
import { ADRIATIC_ACCOMODATIONS_URL } from '../../constants'
import AccomodationFilters from './AccomodationFilters'
import useSWR from 'swr'
import fetcher from '@/app/fetcher'
import ErrorAlert from '../common/ErrorAlert'
import NothingFoundAlert from '../common/NothingFoundAlert'
import Loader from '../common/Loader'

const AccomodationsList = () => {
  const [accommodationFilterPredicate, setAccommodationFilterPredicate] =
    useState<AccommodationFilterPredicate>(() => () => true)

  const {
    data: accomodations,
    error,
    isLoading,
  } = useSWR<Accomodation[]>(ADRIATIC_ACCOMODATIONS_URL, fetcher)

  const filteredAccommodations = useMemo(() => {
    return accomodations?.filter(accommodationFilterPredicate)
  }, [accomodations, accommodationFilterPredicate])

  const updateAccomodationsFilterPredicate = (
    newAccommodationFilterPredicate: AccommodationFilterPredicate
  ) => {
    setAccommodationFilterPredicate(() => newAccommodationFilterPredicate)
  }

  return (
    <>
      <div className='mb-5'>
        <AccomodationFilters
          accomodations={accomodations}
          updateAccomodationsFilterPredicate={
            updateAccomodationsFilterPredicate
          }
        />
      </div>
      <div>
        {error && <ErrorAlert error={error} />}
        {isLoading && <Loader />}
        {!isLoading && filteredAccommodations?.length === 0 && (
          <NothingFoundAlert />
        )}
        {!isLoading &&
          filteredAccommodations &&
          filteredAccommodations.length > 0 && (
            <p className='mb-3'>
              Ukupno: {filteredAccommodations.length}
              {filteredAccommodations.length > 1 ? ' smještaja' : ' smještaj'}
            </p>
          )}
        {!isLoading &&
          filteredAccommodations?.map((accomodation) => (
            <AccomodationItem
              key={accomodation.id}
              accomodation={accomodation}
            />
          ))}
      </div>
    </>
  )
}

export default AccomodationsList
