import { CenteredTextBox } from '@/components/common/CenteredTextBox'
import React from 'react'

export const Javascript = () => {
  return (
    <div className='w-11/12 md:w-4/5 mx-auto relative z-10 sm:top-[50px] md:top-[220px]'>
    
        <img 
          className='mx-auto h-[350px] sm:h-[500px] md:h-full'
          src="https://res.cloudinary.com/datsipxkz/image/upload/v1680217403/monogram-exercise/bg9eamb5rwc7ohkvk9da.png" 
          alt="" 
        />
        
        <CenteredTextBox 
          title='javascript'
          text='Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js'
          textStyles='font-medium'
          styles='absolute top-[10%] py-[50px] md:py-0'
        />
        
        <div className="absolute z-10 w-full top-[85%] sm:top-[78%] md:top-[72%] lg:top-[60%]">
          <img 
            className='mx-auto w-[150px] sm:w-[250px] md:w-[350px] lg:w-1/2'
            src="https://res.cloudinary.com/datsipxkz/image/upload/v1680217403/monogram-exercise/jew8ptrrk2fps78ozsq9.png" 
            alt="" 
          />
        </div>
        
    </div>

  )
}
