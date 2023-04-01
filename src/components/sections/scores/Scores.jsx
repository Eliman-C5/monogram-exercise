import Section from '@/components/wrapper/Section'
import { scoreImgs, scores } from '@/data/texts'
import React from 'react'
import { TopAuditScores } from './TopAuditScores'

export const Scores = () => {
  return (
    <div className="bg-custom-black">
    
      <Section margins='' styles=''>
      
        {/* <div className="w-1/4 h-full border-white border-r border-l"></div>
        <div className="w-1/4 h-ful border-white border-r"></div>
        <div className="w-1/4 h-full border-white border-r"></div>
        <div className="w-1/4 h-full border-white border-r"></div> */}

        <TopAuditScores styles='hidden md:block' />
        
        {/* Hacer componente */}
        <div className="hidden md:block py-[40px] md:py-[80px] relative">
        
          <p>This is a project by me</p>
        
        </div>
    
      </Section>
      
      <TopAuditScores styles='block md:hidden' />
      
      <div className="block md:hidden py-[40px] md:py-[80px] relative">
        
          <p>This is a project by me</p>
        
      </div>
      
    </div>
  )
}
