import { CenteredTextBox } from '@/components/common/CenteredTextBox'
import { LogosRow } from '@/components/common/LogosRow'
import Section from '@/components/wrapper/Section'
import { toolsLogos } from '@/data/texts'
import React from 'react'

export const Tools = () => {
  return (
    <div className='bg-custom-black'>
      <Section>
        <div className="flex">
          <LogosRow col={toolsLogos.col1} index={0} />
          <LogosRow col={toolsLogos.col2} index={1} />
          <LogosRow col={toolsLogos.col3} index={2} />
          <LogosRow col={toolsLogos.col4} index={3} />
        </div>
      
        <CenteredTextBox
          title='api'
          text='At build time, a Jamstack website uses data from one or more APIs to generate markup. These APIs can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!'
          textStyles='text-[24px] leading-[38.88px] font-normal'
          positions=''
        />
      
        <div className="">
      
        </div>
      
      </Section>
    </div>
  )
}
