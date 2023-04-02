import { InnerBackground } from '@/components/common/InnerBackground'
import Section from '@/components/wrapper/Section'
import React from 'react'
import { Footer } from '../footer/Footer'
import { ThreeSphere } from '../tools/ThreeSphere'
import { TopAuditScores } from './TopAuditScores'

const columns = [1, 2, 3, 4]

export const Scores = () => {
  return (
    <div className="bg-custom-black">
    
      <Section margins='' styles='w-full md:w-4/5 relative'>
        
        <InnerBackground />

        <TopAuditScores styles='' />
        
        <Footer styles={''} />
        
        {/* <ThreeSphere /> */}
    
      </Section>

      
    </div>
  )
}
