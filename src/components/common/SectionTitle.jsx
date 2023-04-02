import React from 'react'

export const SectionTitle = ({color, titleText, specialText = false}) => {

  return (
    <>
    {
      specialText ?
      
      <div className="flex justify-start">
        <h4 className={`title ${color}`}>{titleText}</h4>
        <span className={`title ${color} gradient-text md:ml-4`}>{specialText}</span>
      </div>  :
      
      <h4 className={`title ${color}`}>{titleText}</h4> 
      
    }
    </>
  )
}
