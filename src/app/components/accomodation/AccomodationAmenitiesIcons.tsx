import React from 'react'
import { FaSwimmingPool } from 'react-icons/fa'
import { FaWifi } from 'react-icons/fa6'
import { MdPets } from 'react-icons/md'
import { PiTelevisionSimple } from 'react-icons/pi'
import { RiParkingLine } from 'react-icons/ri'
import { TbAirConditioning } from 'react-icons/tb'

interface AccomodationAmenitiesIconsProps {
  amenities: Amenities
}

const AccomodationAmenitiesIcons = ({
  amenities,
}: AccomodationAmenitiesIconsProps) => {
  return (
    <div className='flex gap-2'>
      <div className='tooltip' data-tip='Klimatizacija'>
        <TbAirConditioning
          className={`text-2xl hover:scale-110 duration-300 ${
            amenities.airConditioning ? 'text-green-500' : 'text-red-500'
          }`}
        />
      </div>
      <div className='tooltip' data-tip='Parkirno mjesto'>
        <RiParkingLine
          className={`text-2xl hover:scale-110 duration-300 ${
            amenities.parkingSpace ? 'text-green-500' : 'text-red-500'
          }`}
        />
      </div>
      <div className='tooltip' data-tip='Dozvola za kućne ljubimce'>
        <MdPets
          className={`text-2xl hover:scale-110 duration-300 ${
            amenities.pets ? 'text-green-500' : 'text-red-500'
          }`}
        />
      </div>
      <div className='tooltip' data-tip='Bazen'>
        <FaSwimmingPool
          className={`text-2xl hover:scale-110 duration-300 ${
            amenities.pool ? 'text-green-500' : 'text-red-500'
          }`}
        />
      </div>
      <div className='tooltip' data-tip='Satelitski TV program'>
        <PiTelevisionSimple
          className={`text-2xl hover:scale-110 duration-300 ${
            amenities.tv ? 'text-green-500' : 'text-red-500'
          }`}
        />
      </div>
      <div className='tooltip' data-tip='WiFi'>
        <FaWifi
          className={`text-2xl hover:scale-110 duration-300 ${
            amenities.wifi ? 'text-green-500' : 'text-red-500'
          }`}
        />
      </div>
    </div>
  )
}

export default AccomodationAmenitiesIcons
