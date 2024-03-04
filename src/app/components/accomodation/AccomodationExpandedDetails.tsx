import React from 'react'
import AccomodationAmenitiesIcons from './AccomodationAmenitiesIcons'
import PriceListing from '../common/PriceListing'
import AccomodationReservationForm from './AccomodationReservationForm'

interface AccomodationExpandedDetailsprops {
  accomodation: Accomodation
}

const AccomodationExpandedDetails = ({
  accomodation,
}: AccomodationExpandedDetailsprops) => {
  return (
    <>
      <div className='mb-3'>
        <AccomodationAmenitiesIcons amenities={accomodation.amenities} />
      </div>
      <div>
        <h3 className='text-lg pb-2  border-purple-700 border-b-2'>Cjenik</h3>
        <div className='overflow-x-auto'>
          <PriceListing pricelistInEuros={accomodation.pricelistInEuros} />
        </div>
      </div>
      <div className='mt-3'>
        <AccomodationReservationForm
          maxNumberOfPeople={accomodation.capacity}
          pricelistInEuros={accomodation.pricelistInEuros}
          availableDates={accomodation.availableDates}
          accomodationId={accomodation.id}
          accomodationTitle={accomodation.title}
        />
      </div>
    </>
  )
}

export default AccomodationExpandedDetails
