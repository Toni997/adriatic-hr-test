import React, { ChangeEventHandler } from 'react'

interface CheckboxProps {
  checked: boolean
  name: string
  labeltext: string
  onCheckboxChange: ChangeEventHandler<HTMLInputElement>
}

const Checkbox = ({
  checked,
  name,
  labeltext,
  onCheckboxChange,
}: CheckboxProps) => {
  return (
    <div className='form-control'>
      <label className='label cursor-pointer justify-start gap-2'>
        <span className='label-text'>{labeltext}</span>
        <input
          type='checkbox'
          className='checkbox checkbox-primary'
          name={name}
          checked={checked}
          onChange={onCheckboxChange}
        />
      </label>
    </div>
  )
}

export default Checkbox
