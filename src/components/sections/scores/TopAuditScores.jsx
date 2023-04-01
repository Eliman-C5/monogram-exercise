import { scoreImgs, scores } from '@/data/texts'
import React from 'react'

export const TopAuditScores = ({styles = ''}) => {
  return (
    <div className={`${styles} w-11/12 md:w-4/5 max-w-[1100px] scores-gradient mx-auto relative`}>
        
        <h4 className='text-center title text-white md:mb-6'>top audit scores</h4>
          
        <img className='w-[200px] h-[200px] mx-auto md:hidden' src={scoreImgs[0].link} alt={scoreImgs[0].name} />
        
        <div className="hidden md:flex justify-between">
          {
            scoreImgs.map(img => <img key={img.id} src={img.link} alt={img.name} className='w-[200px] h-[200px]' />)
          }
        </div>
        
        <div className="block px-2 md:px-12">
          {
            scores.map(score => <p key={score.id} className='text-[#C7C7C7] score-p my-3'>{score.text}</p>)
          }
        </div>
        
    </div>
  )
}
