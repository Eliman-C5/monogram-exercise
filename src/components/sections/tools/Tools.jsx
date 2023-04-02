import { CenteredTextBox } from '@/components/common/CenteredTextBox'
import { InnerBackground } from '@/components/common/InnerBackground'
import { InnerBorders } from '@/components/common/InnerBorders'
import { LogosRow } from '@/components/common/LogosRow'
import Section from '@/components/wrapper/Section'
import { apiTool, toolsLogos } from '@/data/texts'
import React from 'react'
import { Slider } from './Slider'
import { ThreeSphere } from './ThreeSphere'

export const Tools = () => {
  return (
    <div className='bg-custom-black translate-y-[-60px] md:translate-y-0'>
      <Section styles={''} margins='mt-0 mb-[80px] md:my-[120px] relative'>
      
        <InnerBorders styles='hidden md:flex'>
          <LogosRow col={toolsLogos.col1} rowStyles='border-r border-l pt-[40%] lg:pt-[30%] xl:pt-[20%]' />
          <LogosRow col={toolsLogos.col2} rowStyles='border-r pt-[40%] xl:pt-[30%]' />
          <LogosRow col={toolsLogos.col3} rowStyles='border-r pt-[55%] xl:pt-[45%]' />
          <LogosRow col={toolsLogos.col4} rowStyles='border-r pt-[10%] xl:pt-0' />
        </InnerBorders>
        
        <InnerBackground visible='flex md:hidden' />
        
        <Slider />
      
        <CenteredTextBox
          title={apiTool.title}
          text={apiTool.text}
          styles={apiTool.style}
          textSize='tools-markup-p'
        >
          <ThreeSphere size={6.5} style='h-[450px] max-w-[400px] mx-auto sm:hidden' />
          <ThreeSphere size={5} style='h-[600px] max-w-[500px] mx-auto hidden sm:block md:hidden' />
          <ThreeSphere size={5} style='mx-auto hidden md:block' />
        </CenteredTextBox>
      
      </Section>
    </div>
  )
}
