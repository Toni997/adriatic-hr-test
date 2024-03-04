import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'

const NothingFoundAlert = () => {
  return (
    <div role='alert' className='alert alert-info'>
      <FaInfoCircle />
      <span>Ništa nije pronađeno.</span>
    </div>
  )
}

export default NothingFoundAlert
