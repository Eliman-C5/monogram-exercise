import React from 'react'
import { TransparentImage } from './TransparentImage'

export const ImagesBox = ({firstImage, secondImage}) => {
  return (
    <div className="hidden md:flex w-1/2 gap-4">
        <div className="w-1/2 flex flex-col relative top-[25%]">
          <img className='max-w-[280px]' src={firstImage} alt="" />
          <TransparentImage positions={'top-[44%] left-[28%]'} />
        </div>
        
        <div className="w-1/2 flex flex-col relative">
          <img className='max-w-[278px]' src={secondImage} alt="" />
          <TransparentImage positions={'top-[35%] left-[40%]'} />
        </div>
    </div>
  )
}
