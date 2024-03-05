import { formatDateForOutput } from '@/app/helpers'
import React from 'react'

interface PriceListingProps {
  pricelistInEuros: PriceInEuros[]
}

const PriceListing = ({ pricelistInEuros }: PriceListingProps) => {
  return (
    <table className='table'>
      <thead>
        <tr className='border-b-purple-700'>
          <th>Od</th>
          <th>Do</th>
          <th>Cijena</th>
        </tr>
      </thead>
      <tbody>
        {pricelistInEuros.map((price, index) => (
          <tr
            key={index}
            className='hover border-b-purple-700 hover:!bg-purple-700'
          >
            <td>{formatDateForOutput(new Date(price.intervalStart))}</td>
            <td>{formatDateForOutput(new Date(price.intervalEnd))}</td>
            <td>{price.pricePerNight},00 €</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PriceListing
