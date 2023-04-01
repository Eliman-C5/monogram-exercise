import { scores } from '@/data/texts'
import React from 'react'

export const ScoreParagraphs = () => {
  return (
    <div className="block px-2 md:px-12">
        {
          scores.map(score => <p key={score.id} className='text-[#C7C7C7] score-p my-3 md:my-5'>{score.text}</p>)
        }
    </div>
  )
}
