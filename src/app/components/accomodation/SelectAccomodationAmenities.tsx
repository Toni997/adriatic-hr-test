'use client'

import React, { ChangeEvent } from 'react'
import Checkbox from '../common/Checkbox'
import { useAccomodationFiltersStore } from '@/app/stores/accomodationFiltersStore'

const SelectAccomodationAmenities = () => {
  const {
    accomodationFilters: { amenities },
    updateAmenity,
  } = useAccomodationFiltersStore()

  const onChangeAmenities = (e: ChangeEvent<HTMLInputElement>) => {
    updateAmenity(e.target.name, e.target.checked)
  }

  return (
    <>
      <div className='flex gap-2 max-lg:flex-col max-lg:gap-0'>
        <Checkbox
          checked={amenities.airConditioning}
          name={'airConditioning'}
          labeltext='Klimatizacija'
          onCheckboxChange={onChangeAmenities}
        />
        <Checkbox
          checked={amenities.parkingSpace}
          name={'parkingSpace'}
          labeltext='Parkirno mjesto'
          onCheckboxChange={onChangeAmenities}
        />
        <Checkbox
          checked={amenities.pets}
          name={'pets'}
          labeltext='Dozvola za kućne ljubimce'
          onCheckboxChange={onChangeAmenities}
        />
        <Checkbox
          checked={amenities.pool}
          name={'pool'}
          labeltext='Bazen'
          onCheckboxChange={onChangeAmenities}
        />
        <Checkbox
          checked={amenities.tv}
          name={'tv'}
          labeltext='Satelitski TV program'
          onCheckboxChange={onChangeAmenities}
        />
        <Checkbox
          checked={amenities.wifi}
          name={'wifi'}
          labeltext='WiFi'
          onCheckboxChange={onChangeAmenities}
        />
      </div>
    </>
  )
}

export default SelectAccomodationAmenities
