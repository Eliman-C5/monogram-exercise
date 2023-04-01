import { scoreImgs, scores } from '@/data/texts'
import React from 'react'
import { ScoreImage } from './ScoreImage'
import { ScoreImagesBox } from './ScoreImagesBox'
import { ScoreParagraphs } from './ScoreParagraphs'

export const TopAuditScores = ({styles = ''}) => {
  return (
    <div className={`${styles} w-11/12 md:w-4/5 2xl:w-full max-w-[1204px] scores-gradient mx-auto relative z-20`}>
        
        <h4 className='text-center score-title text-white md:mb-6'>top audit scores</h4>
          
        <ScoreImage link={scoreImgs[0].link} alt={scoreImgs[0].name} styles='w-[200px] h-[200px] mx-auto lg:hidden' />
        
        <ScoreImagesBox />
        
        <ScoreParagraphs />
        
    </div>
  )
}
