import { CenteredTextBox } from '@/components/common/CenteredTextBox'
import { LogosRow } from '@/components/common/LogosRow'
import Section from '@/components/wrapper/Section'
import { toolsLogos } from '@/data/texts'
import React from 'react'

export const Tools = () => {
  return (
    <div className='bg-custom-black translate-y-[-20px] md:translate-y-0'>
      <Section styles={''} margins='mt-0 mb-[80px] md:my-[120px]'>
        <div className="hidden md:flex">
          <LogosRow col={toolsLogos.col1} rowStyles='border-r border-l pt-[15%]' />
          <LogosRow col={toolsLogos.col2} rowStyles='border-r pt-[25%]' />
          <LogosRow col={toolsLogos.col3} rowStyles='border-r pt-[30%]' />
          <LogosRow col={toolsLogos.col4} rowStyles='border-r pt-[5%]' />
        </div>
        
        {/* Write here the carusel */}
      
        <CenteredTextBox
          title='api'
          text='At build time, a Jamstack website uses data from one or more APIs to generate markup. These APIs can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!'
          // textStyles='text-[24px] leading-[38.88px] font-normal'
          positions='translate-y-[150px] sm:translate-y-[300px]'
        >
            <img 
              src="https://res.cloudinary.com/datsipxkz/image/upload/v1680293977/monogram-exercise/i3mv2d2g1i0lo9nfg4y5.png" 
              alt="" 
              className='mx-auto mt-[10%]'  
            />
        </CenteredTextBox>
      
      </Section>
    </div>
  )
}
