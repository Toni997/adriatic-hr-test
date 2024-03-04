'use client'

import React, { MouseEventHandler } from 'react'
import { MdExpandMore } from 'react-icons/md'

interface SectionExpanderProps {
  onExpand: MouseEventHandler<HTMLDivElement>
}

const SectionExpander = ({ onExpand }: SectionExpanderProps) => {
  return (
    <>
      <div
        className='tooltip cursor-pointer'
        data-tip='Proširi'
        onClick={onExpand}
      >
        <MdExpandMore className='text-4xl' />
      </div>
    </>
  )
}

export default SectionExpander
