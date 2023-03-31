import { ImagesBox } from '@/components/common/ImagesBox'
import { ParagraphBox } from '@/components/common/ParagraphBox'
import Section from '@/components/wrapper/Section'
import { markup } from '@/data/texts'
import React from 'react'

export const Markup = () => {
  return (
    <Section styles='flex'>
      <ParagraphBox 
        colorText='black' 
        titleText={markup.title} 
        paragraphText={markup.paragraph} 
        imgLink={markup.imgLink}
      />
      <ImagesBox 
        firstImage={markup.firstImage}
        secondImage={markup.secondImage}
      />
    </Section>
  )
}
