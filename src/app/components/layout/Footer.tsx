import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-purple-900'>
        <p className='text-center py-3'>
          Adriatic.hr &#169; {new Date().getFullYear()}
        </p>
      </div>
    </>
  )
}

export default Footer
