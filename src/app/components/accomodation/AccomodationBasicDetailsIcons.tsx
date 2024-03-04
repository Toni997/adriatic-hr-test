import React from 'react'
import { FaPeopleRoof } from 'react-icons/fa6'
import { TbBeach } from 'react-icons/tb'

interface AccomodationBasicDetailsIcons {
  capacity: number
  beachDistanceInMeters: number | null
}

const AccomodationBasicDetailsIcons = ({
  capacity,
  beachDistanceInMeters,
}: AccomodationBasicDetailsIcons) => {
  return (
    <>
      <div className='tooltip flex mb-1' data-tip='Maksimalan broj osoba'>
        <FaPeopleRoof className='text-purple-300 text-2xl mr-2' />
        {capacity}
      </div>
      {beachDistanceInMeters && (
        <div className='tooltip flex' data-tip='Udaljenost od plaže'>
          <TbBeach className='text-purple-300 text-2xl mr-2' />
          {beachDistanceInMeters} m
        </div>
      )}
    </>
  )
}

export default AccomodationBasicDetailsIcons
