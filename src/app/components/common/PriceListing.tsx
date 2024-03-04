import React from 'react'

interface PriceListingProps {
  pricelistInEuros: PriceInEuros[]
}

const formatDateToMonthDay = (dateString: string) => {
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.getMonth() + 1
  return `${day}.${month}.`
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
            <td>{formatDateToMonthDay(price.intervalStart)}</td>
            <td>{formatDateToMonthDay(price.intervalEnd)}</td>
            <td>{price.pricePerNight},00 €</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PriceListing
