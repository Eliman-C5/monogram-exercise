import { scoreImgs } from '@/data/texts'
import React from 'react'
import { ScoreImage } from './ScoreImage'

export const ScoreImagesBox = () => {
  return (
    <div className="hidden lg:flex justify-between">
      {
        scoreImgs.map(img => <ScoreImage key={img.id} link={img.link} name={img.name} styles='lg:w-[150px] lg:h-[150px] xl:w-[212px] xl:h-[212px]' />)
      }
    </div>
  )
}
