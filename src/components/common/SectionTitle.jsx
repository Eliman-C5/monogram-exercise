import React from 'react'

export const SectionTitle = ({color, titleText, specialText = false}) => {
  return (
    <h4 className={`text-[133px] leading-[152.5px] font-black ${color}`}>{titleText}{specialText && <span>{specialText}</span>}</h4>
  )
}
