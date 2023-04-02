import { ImagesBox } from '@/components/common/ImagesBox'
import { ParagraphBox } from '@/components/common/ParagraphBox'
import Section from '@/components/wrapper/Section'
import { header } from '@/data/texts'
import Image from 'next/image'
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
        <Image 
          className='h-[45%] sm:h-[60%] md:h-[75%] lg::h-full mx-auto relative top-[5%] sm:top-[3%] md:top-[10%]' 
          src={header.imgLink} 
          alt="Points arrow that takes you to next section"
          width={91}
          height={533}
        />
      </ParagraphBox>
      <ImagesBox 
        firstImage={header.firstImage}
        secondImage={header.secondImage}
      />
    </Section>
  )
}
