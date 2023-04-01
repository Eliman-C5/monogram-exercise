import React from 'react'
import { SectionTitle } from './SectionTitle'

export const ParagraphBox = 
({colorText, 
  titleText, 
  paragraphText,
  children,
  paragraphStyles, 
  specialText = false}) => {

  let color

  if (colorText === 'white') color = 'text-white'
  
  if (colorText === 'black') color = 'text-custom-black'

  return (
    <div className={`h-[700px] md:h-auto md:w-1/2`}>
      <SectionTitle color={color} titleText={titleText} specialText={specialText} />
      <p className={`${paragraphStyles} mt-4 md:mt-8 lg:mt-12`}>
        {paragraphText}
      </p>
      {children}
    </div>
  )
}
