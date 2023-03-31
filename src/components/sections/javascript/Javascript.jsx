import { CenteredTextBox } from '@/components/common/CenteredTextBox'
import React from 'react'

export const Javascript = () => {
  return (
    <div className='w-4/5 mx-auto relative z-10 top-[220px]'>
    
        <img 
          className=''
          src="https://res.cloudinary.com/datsipxkz/image/upload/v1680217403/monogram-exercise/bg9eamb5rwc7ohkvk9da.png" 
          alt="" 
        />
        
        <CenteredTextBox 
          title='javascript'
          text='Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js'
          textStyles='text-[18px] leading-[35.19px] font-light'
          positions='absolute top-[10%]'
        />
        
        <div className="absolute w-full top-[45%]">
          <img 
            className='mx-auto'
            src="https://res.cloudinary.com/datsipxkz/image/upload/v1680217403/monogram-exercise/jew8ptrrk2fps78ozsq9.png" 
            alt="" 
          />
        </div>
        
    </div>

  )
}
