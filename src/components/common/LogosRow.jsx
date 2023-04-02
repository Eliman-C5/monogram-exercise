import Image from 'next/image'
import React from 'react'

export const LogosRow = ({col, rowStyles}) => {
  return (
    <div className={`w-1/4 flex flex-col ${rowStyles} border-[#ffffff36] border-dotted`}>
      {
        col.map(item => <Image 
          key={item.id} 
          src={item.link} 
          alt={item.name} 
          className={item.styles} 
          width={350}
          height={300}
        />)
      }
    </div>
  )
}
