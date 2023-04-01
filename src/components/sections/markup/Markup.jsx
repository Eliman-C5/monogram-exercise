import { ImagesBox } from '@/components/common/ImagesBox'
import { ParagraphBox } from '@/components/common/ParagraphBox'
import Section from '@/components/wrapper/Section'
import { markup, markupColors } from '@/data/texts'
import React from 'react'
import { ColorRow } from './ColorRow'

export const Markup = () => {
  return (
    <>
      <Section styles='flex gap-8 pt-[20%] sm:pt-[45%] md:pt-[10%]' margins=''>
        <ParagraphBox 
          colorText='black' 
          titleText={markup.title} 
          paragraphText={markup.paragraph} 
          paragraphStyles='text-[#414141]'
          imgLink={markup.imgLink}
        />
        <ImagesBox 
          firstImage={markup.firstImage}
          secondImage={markup.secondImage}
        />
      </Section>
      
      <div className="w-4/5 mx-auto max-w-[1512px] mt-[30%] md:mt-[15%]">
        <ColorRow styles='ml-8' col={markupColors.col1} />
        <ColorRow styles='' col={markupColors.col2} />
      </div>
      
      <div className="w-full mx-auto max-w-[1512px]">
        <ColorRow styles='' col={markupColors.col3} />
        <ColorRow styles='' col={markupColors.col4} />
      </div>
    </>
  )
}
