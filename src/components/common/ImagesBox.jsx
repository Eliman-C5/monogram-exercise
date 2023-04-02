import Image from 'next/image'
import React from 'react'
import { TransparentImage } from './TransparentImage'

export const ImagesBox = ({firstImage, secondImage}) => {
  return (
    <div className="hidden md:flex w-1/2 gap-4">
        <div className="w-1/2 flex flex-col relative md:top-[35%] lg:top-[20%]">
          <Image 
            className='max-w-[280px]' 
            src={firstImage.src} 
            alt={firstImage.alt} 
            width={firstImage.width}
            height={firstImage.height}
            priority
          />
          <TransparentImage positions={'top-[20%] lg:top-[25%] left-[28%]'} />
        </div>
        
        <div className="w-1/2 flex flex-col relative md:top-[15%] lg:top-0">
          <Image 
            className='max-w-[278px]' 
            src={secondImage.src} 
            alt={secondImage.alt} 
            width={secondImage.width}
            height={secondImage.height}
            priority
          />
          <TransparentImage positions={'top-[18%] lg:top-[20%] left-[40%]'} />
        </div>
    </div>
  )
}
