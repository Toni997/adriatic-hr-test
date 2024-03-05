'use client'

import React, { useState } from 'react'
import AccomodationBasicDetailsIcons from './AccomodationBasicDetailsIcons'
import AccomodationExpandedDetails from './AccomodationExpandedDetails'
import SectionExpander from '../common/SectionExpander'

interface AccomodationItemProps {
  accomodation: Accomodation
}

const AccomodationItem = ({ accomodation }: AccomodationItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const onExpand = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <>
      <div className='bg-purple-900 rounded-md mb-5 last:mb-0 hover:scale-[1.005] hover:bg-purple-800 duration-500'>
        <div className='flex max-lg:flex-col'>
          <div className='w-[250px] h-[250px] max-lg:w-full overflow-hidden rounded-tl-md rounded-bl-md'>
            <img
              src={accomodation.image}
              alt={accomodation.title}
              className='max-lg:m-auto w-full h-full object-cover'
            />
          </div>
          <div className='p-5 flex flex-col justify-between flex-grow gap-2'>
            <h3 className='text-xl'>{accomodation.title}</h3>
            <div className='flex justify-between'>
              <div className='mt-auto'>
                <AccomodationBasicDetailsIcons
                  capacity={accomodation.capacity}
                  beachDistanceInMeters={accomodation.beachDistanceInMeters}
                />
              </div>
              <div className='flex items-end'>
                <SectionExpander onExpand={onExpand} />
              </div>
            </div>
          </div>
        </div>
        {isExpanded && (
          <div className='p-5'>
            <AccomodationExpandedDetails accomodation={accomodation} />
          </div>
        )}
      </div>
    </>
  )
}

export default AccomodationItem
