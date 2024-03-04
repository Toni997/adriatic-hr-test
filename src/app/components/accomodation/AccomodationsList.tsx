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
      <h1 className='text-2xl border-purple-900 border-b-2 mb-4 pb-2'>
        Smještaji
      </h1>
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
        {filteredAccommodations?.length === 0 && !isLoading && (
          <NothingFoundAlert />
        )}
        {isLoading && <Loader />}
        {!isLoading &&
          filteredAccommodations &&
          filteredAccommodations?.length > 0 && (
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
