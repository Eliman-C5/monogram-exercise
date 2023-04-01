import { ImagesBox } from '@/components/common/ImagesBox'
import { ParagraphBox } from '@/components/common/ParagraphBox'
import Section from '@/components/wrapper/Section'
import { markup, markupColors } from '@/data/texts'
import React from 'react'
import { ColorRow } from './ColorRow'

export const Markup = () => {
  return (
    <>
      <Section styles='flex gap-8 pt-[20%] sm:pt-[30%] lg:pt-[20%] 2xl:pt-[10%]' margins=''>
        <ParagraphBox 
          colorText='black' 
          titleText={markup.title} 
          paragraphText={markup.paragraph} 
          paragraphStyles='text-[#414141] tools-markup-p'
        >
          <img className='h-1/3 sm:h-[60%] md:h-[35%] lg::h-full mx-auto relative top-[5%] sm:top-[3%]' src={markup.imgLink} alt="" />
        </ParagraphBox>
        <ImagesBox 
          firstImage={markup.firstImage}
          secondImage={markup.secondImage}
        />
      </Section>
      
      <div className="w-4/5 mx-auto max-w-[1512px] mt-[30%] md:mt-[35%] lg:mt-[15%]">
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
