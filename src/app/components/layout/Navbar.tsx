import Link from 'next/link'
import React from 'react'
import { CiHome } from 'react-icons/ci'

const Navbar = () => {
  return (
    <nav className='navbar bg-purple-900'>
      <Link href='/' className='btn btn-ghost text-xl'>
        <CiHome className='text-2xl' />
      </Link>
    </nav>
  )
}

export default Navbar
