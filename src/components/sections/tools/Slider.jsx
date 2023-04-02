import { toolIcons } from '@/data/texts'
import Image from 'next/image'
import React from 'react'

export const Slider = () => {
  return (
    <div className="flex slider md:hidden">
      {
        toolIcons.map(icon => <Image 
          key={icon.id} 
          src={icon.link} 
          alt={icon.name} 
          className='h-[90%]' 
          width={350}
          height={300}
        />)
      }
    </div>
  )
}
