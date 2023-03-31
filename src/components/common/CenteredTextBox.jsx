import React from 'react'

export const CenteredTextBox = ({title, text, textStyles, positions}) => {
  return (
    <div className={`w-full ${positions} flex flex-col justify-center`}>
        <h4 className='text-center title text-white mb-6'>{title}</h4>
        <p className={`w-[50%] mx-auto ${textStyles} text-center text-white`}>{text}</p>
    </div>
  )
}
