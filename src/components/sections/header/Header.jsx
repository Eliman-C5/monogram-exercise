import { ImagesBox } from '@/components/common/ImagesBox'
import { ParagraphBox } from '@/components/common/ParagraphBox'
import Section from '@/components/wrapper/Section'
import { header } from '@/data/texts'
import React from 'react'

export const Header = () => {
  return (
    <Section styles='flex'>
      <ParagraphBox 
        colorText='black' 
        titleText={header.title} 
        paragraphText={header.paragraph} 
        specialText='101' 
        imgLink={header.imgLink}
      />
      <ImagesBox 
        firstImage={header.firstImage}
        secondImage={header.secondImage}
      />
    </Section>
  )
}
