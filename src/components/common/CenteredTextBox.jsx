import React from 'react'

export const CenteredTextBox = ({title, text, positions, children}) => {
  return (
    <div className={`w-full ${positions} flex flex-col justify-center`}>
        <h4 className='text-center title text-white mb-6'>{title}</h4>
        <p className={`md:w-[50%] mx-2 sm:mx-5 md:mx-auto text-center text-white`}>{text}</p>
        {children}
    </div>
  )
}
