import Image from 'next/image'
import React from 'react'

export const ScoreImage = ({link, name, styles}) => {
  return (
    <Image 
      src={link} 
      alt={name} 
      className={`${styles}`} 
      width={200}
      height={200}
    />
  )
}
