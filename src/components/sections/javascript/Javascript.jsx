import { CenteredTextBox } from '@/components/common/CenteredTextBox'
import { javascriptImages } from '@/data/texts'
import Image from 'next/image'
import React from 'react'

export const Javascript = () => {
  return (
    <div className='w-11/12 md:w-4/5 mx-auto relative z-10 sm:top-[50px] md:top-[220px]'>
    
        <Image
          className='mx-auto h-[350px] sm:h-[500px] md:h-full'
          src={javascriptImages.gradientSquare.src}
          alt={javascriptImages.gradientSquare.alt}
          width={1300}
          height={800}
        />
        
        <CenteredTextBox 
          title='javascript'
          text='Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js'
          textStyles='font-medium'
          styles='absolute top-[10%] py-[50px] md:py-0'
        />
        
        <Image 
          src={javascriptImages.arrow.src} 
          alt={javascriptImages.arrow.alt} 
          className="hidden md:block absolute top-[58%] lg:top-[44%] right-[13%] lg:right-[8%] 2xl:right-[15%] w-[80px] lg:w-[150px] 2xl:w-[200px]" 
          width={248}
          height={467}
        />
        
        <div className="absolute z-10 w-full top-[85%] sm:top-[78%] md:top-[72%] lg:top-[60%]">
          <Image 
            className='mx-auto w-[150px] sm:w-[250px] md:w-[350px] lg:w-1/2'
            src={javascriptImages.computer.src}
            alt={javascriptImages.computer.alt}
            width={800}
            height={800}
          />
        </div>
        
    </div>

  )
}
