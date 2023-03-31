import React from 'react'
import { SectionTitle } from './SectionTitle'

export const ParagraphBox = 
({colorText, 
  titleText, 
  paragraphText,
  imgLink,
  smallTexts = false, 
  specialText = false}) => {

  let color

  if (colorText === 'white') color = 'text-white'
  
  if (colorText === 'black') color = 'text-custom-black'

  return (
    <div className={`w-1/2`}>
      <SectionTitle color={color} titleText={titleText} specialText={specialText} />
      <p 
        className={`${
          smallTexts &&
          'text-[24px] leading-[38.88px] font-normal -tracking-[3.9%]'
        }`}>
        {paragraphText}
      </p>
      <img src={imgLink} alt="" />
    </div>
  )
}
