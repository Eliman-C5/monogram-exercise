import React from 'react'
import { InnerBorders } from './InnerBorders'

const columns = [1, 2, 3, 4]

export const InnerBackground = ({visible = 'flex'}) => {
  return (
    <InnerBorders styles={`${visible} left-0 right-0`}>
      {
        columns.map(col => 
          <div 
            key={col} 
            className={`w-1/4 ${col === 1 ? 'border-r border-l' : 'border-r'} border-[#ffffff36] border-dotted opacity-100`}
          >
          </div>)
      }
    </InnerBorders>
  )
}
