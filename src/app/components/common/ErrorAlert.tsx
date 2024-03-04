import React from 'react'
import { VscError } from 'react-icons/vsc'

interface ErrorAlertProps {
  error: any
}

const ErrorAlert = ({ error }: ErrorAlertProps) => {
  console.log(error)
  return (
    <>
      <div role='alert' className='alert alert-error'>
        <VscError />
        <span>
          Greška! Nešto je pošlo po zlu, molimo pokušajte ponovno kasnije.
        </span>
      </div>
    </>
  )
}

export default ErrorAlert
