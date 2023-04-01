import { ImagesBox } from '@/components/common/ImagesBox'
import { ParagraphBox } from '@/components/common/ParagraphBox'
import Section from '@/components/wrapper/Section'
import { header } from '@/data/texts'
import React from 'react'

export const Header = () => {
  return (
    <Section styles='flex gap-4' margins='mt-[40px] md:mt-[80px] pt-4 md:pt-12'>
      <ParagraphBox 
        colorText='black' 
        titleText={header.title} 
        paragraphText={header.paragraph} 
        specialText='101' 
        paragraphStyles='text-[#757575]'
      >
        <img className='h-1/3 sm:h-[60%] md:h-[75%] lg::h-full mx-auto relative top-[5%] sm:top-[3%] md:top-[10%]' src={header.imgLink} alt="" />
      </ParagraphBox>
      <ImagesBox 
        firstImage={header.firstImage}
        secondImage={header.secondImage}
      />
    </Section>
  )
}
