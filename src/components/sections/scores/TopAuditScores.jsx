import { scoreImgs, scores } from '@/data/texts'
import React from 'react'

export const TopAuditScores = ({styles = ''}) => {
  return (
    <div className={`${styles} w-11/12 md:w-4/5 2xl:w-full max-w-[1204px] scores-gradient mx-auto relative`}>
        
        <h4 className='text-center score-title text-white md:mb-6'>top audit scores</h4>
          
        <img className='w-[200px] h-[200px] mx-auto lg:hidden' src={scoreImgs[0].link} alt={scoreImgs[0].name} />
        
        <div className="hidden lg:flex justify-between">
          {
            scoreImgs.map(img => <img key={img.id} src={img.link} alt={img.name} className='lg:w-[150px] lg:h-[150px] xl:w-[212px] xl:h-[212px]' />)
          }
        </div>
        
        <div className="block px-2 md:px-12">
          {
            scores.map(score => <p key={score.id} className='text-[#C7C7C7] score-p my-3 md:my-5'>{score.text}</p>)
          }
        </div>
        
    </div>
  )
}
