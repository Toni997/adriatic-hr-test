import { formatDateForInput } from '@/app/helpers'
import React, { ChangeEventHandler } from 'react'

interface DatePickerProps {
  date: Date | null
  minDate: string
  maxDate: string
  placeholder: string
  name: string
  onDateChange: ChangeEventHandler<HTMLInputElement>
}

const DatePicker = ({
  date,
  minDate,
  maxDate,
  placeholder,
  name,
  onDateChange,
}: DatePickerProps) => {
  return (
    <input
      type='date'
      name={name}
      placeholder={placeholder}
      min={minDate}
      max={maxDate}
      onChange={onDateChange}
      value={formatDateForInput(date)}
      className='bg-purple-500 p-3 rounded-md'
    />
  )
}

export default DatePicker
