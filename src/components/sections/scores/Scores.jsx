import { InnerBackground } from '@/components/common/InnerBackground'
import Section from '@/components/wrapper/Section'
import React from 'react'
import { Footer } from '../footer/Footer'
import { TopAuditScores } from './TopAuditScores'

export const Scores = () => {
  return (
    <div className="bg-custom-black">
    
      <Section margins='' styles='w-full md:w-4/5 relative'>
        
        <InnerBackground />

        <TopAuditScores styles='' />
        
        <Footer styles={''} />
    
      </Section>

      
    </div>
  )
}
