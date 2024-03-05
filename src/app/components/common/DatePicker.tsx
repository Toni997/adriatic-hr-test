import { formatDateForInput } from '@/app/helpers'
import React, { ChangeEventHandler } from 'react'

interface DatePickerProps {
  date: Date | null
  minDate: string
  maxDate: string
  name: string
  onDateChange: ChangeEventHandler<HTMLInputElement>
}

const DatePicker = ({
  date,
  minDate,
  maxDate,
  name,
  onDateChange,
}: DatePickerProps) => {
  return (
    <input
      type='date'
      name={name}
      min={minDate}
      max={maxDate}
      onChange={onDateChange}
      value={formatDateForInput(date)}
      className='bg-purple-500 p-3 rounded-md max-lg:w-full'
    />
  )
}

export default DatePicker
