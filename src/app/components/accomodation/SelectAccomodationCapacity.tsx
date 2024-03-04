'use client'

import { useAccomodationFiltersStore } from '@/app/stores/accomodationFiltersStore'
import React, { ChangeEvent } from 'react'

interface SelectAccomodationCapacityProps {
  max?: number
}

const SelectAccomodationCapacity = ({
  max,
}: SelectAccomodationCapacityProps) => {
  const {
    accomodationFilters: { capacity },
    updateCapacity,
  } = useAccomodationFiltersStore()

  const onChangeCapacity = (e: ChangeEvent<HTMLSelectElement>) => {
    updateCapacity(parseInt(e.target.value))
  }

  return (
    <>
      <div>
        <select
          className='select select-bordered bg-purple-500 rounded-md'
          value={capacity}
          onChange={onChangeCapacity}
        >
          <option value={0}>Osobe</option>
          {Array(max ?? 99)
            .fill(1)
            .map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
        </select>
      </div>
    </>
  )
}

export default SelectAccomodationCapacity
