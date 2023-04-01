import { CenteredTextBox } from '@/components/common/CenteredTextBox'
import { InnerBackground } from '@/components/common/InnerBackground'
import { InnerBorders } from '@/components/common/InnerBorders'
import { LogosRow } from '@/components/common/LogosRow'
import Section from '@/components/wrapper/Section'
import { apiTool, toolsLogos } from '@/data/texts'
import React from 'react'

const icons = [
  {
    id: 1,
    link: 'https://res.cloudinary.com/datsipxkz/image/upload/v1680224673/monogram-exercise/ic3mlka8pjum3pwb7vch.svg',
    name: 'Svelte icon',
  },
  {
    id: 2,
    link: 'https://res.cloudinary.com/datsipxkz/image/upload/v1680224650/monogram-exercise/cvs3vibqucw89csj4cww.svg',
    name: 'ReactJS icon',
  },
  {
    id: 3,
    link: 'https://res.cloudinary.com/datsipxkz/image/upload/v1680224744/monogram-exercise/en2mnxu2dzoo6tclt8uy.svg',
    name: 'NextJS icon',
  },
  {
    id: 4,
    link: 'https://res.cloudinary.com/datsipxkz/image/upload/v1680230917/monogram-exercise/ab1i4mwcy2yitzndmnce.svg',
    name: 'VueJS icon',
  }
]

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
        
        {/* Write here the carusel */}
        <div className="flex slider md:hidden">
          {
            icons.map(icon => <img key={icon.id} src={icon.link} alt={icon.name} className='h-[90%]' />)
          }
        </div>
      
        <CenteredTextBox
          title={apiTool.title}
          text={apiTool.text}
          styles={apiTool.style}
          textSize='tools-markup-p'
        >
            <img 
              src={apiTool.img} 
              alt={apiTool.alt} 
              className='mx-auto mt-[10%] md:w-1/2'  
            />
        </CenteredTextBox>
      
      </Section>
    </div>
  )
}
