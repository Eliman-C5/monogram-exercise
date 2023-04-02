import { toolIcons } from '@/data/texts'
import React from 'react'

export const Slider = () => {
  return (
    <div className="flex slider md:hidden">
      {
        toolIcons.map(icon => <img key={icon.id} src={icon.link} alt={icon.name} className='h-[90%]' />)
      }
    </div>
  )
}
