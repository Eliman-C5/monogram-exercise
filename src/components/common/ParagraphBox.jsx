import React from 'react'
import { SectionTitle } from './SectionTitle'

export const ParagraphBox = 
({colorText, 
  titleText, 
  paragraphText,
  imgLink,
  paragraphStyles, 
  specialText = false}) => {

  let color

  if (colorText === 'white') color = 'text-white'
  
  if (colorText === 'black') color = 'text-custom-black'

  return (
    <div className={`h-[700px] md:h-auto md:w-1/2`}>
      <SectionTitle color={color} titleText={titleText} specialText={specialText} />
      <p className={`${paragraphStyles} mt-4 md:mt-12`}>
        {paragraphText}
      </p>
      <img className='h-1/3 sm:h-2/3 md:h-full mx-auto relative top-[5%] sm:top-[3%] md:top-[10%]' src={imgLink} alt="" />
    </div>
  )
}
