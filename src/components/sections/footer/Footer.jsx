import Image from 'next/image'
import React from 'react'

export const Footer = ({styles}) => {
  return (
    <div className={`${styles} py-[40px] md:py-[80px] relative`}>
        
        <p className='text-white text-center tools-markup-p'>This is a design test by Eli Castellano for Monogram</p>
        
        <a 
          href="https://github.com/Eliman-C5/monogram-exercise" 
          target='_blank' 
          rel='noopener noreferrer' 
          className='flex items-center gap-4 border font-medium border-white bg-gradient-to-r from-[rgba(255,255,255,0.82)] to-white opacity-90 rounded-xl w-fit mx-auto py-3 px-6 mt-4'
        >
            Follow me
            <Image 
              src="https://res.cloudinary.com/datsipxkz/image/upload/v1680448405/monogram-exercise/frp7ap9glve6vnlxki6a.svg" 
              alt="An Github icon that takes you to my account" 
              className='w-[30px] h-[30px] relative z-50'
              width={30}
              height={30}
            />
        </a>
        
    </div>
  )
}
