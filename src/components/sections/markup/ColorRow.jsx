import React from 'react'

export const ColorRow = ({styles, col}) => {
  return (
    <div className={`flex justify-center ${styles}`}>
      {col.map(item => <div key={item.id} className={`${item.color} max-w-[320px] w-1/4 h-[25px] sm:h-[35px] md:h-[57px] rounded-[7px]`}></div>)}
    </div>
  )
}
