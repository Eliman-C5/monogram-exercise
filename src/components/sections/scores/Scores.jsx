import Section from '@/components/wrapper/Section'
import { scoreImgs, scores } from '@/data/texts'
import React from 'react'

export const Scores = () => {
  return (
    <div className="bg-custom-black">
    
      <Section margins='mt-[40px] md:mt-[80px] py-12'>
      
        <div className='w-4/5 mx-auto border border-white mt-8 p-4'>
        
          <h4 className='text-center text-[76px] leading-[91.98px] font-black text-white mb-6'>top audit scores</h4>
        
          <div className="flex justify-center">
            {
              scoreImgs.map(img => <img key={img.id} src={img.link} alt={img.name} className='w-[200px] h-[200px]' />)
            }
          </div>
        
          <div className="px-4">
          {
            scores.map(score => <p key={score.id} className='text-white'>{score.text}</p>)
          }
          </div>
        
        </div>
    
      </Section>
      
    </div>
  )
}
