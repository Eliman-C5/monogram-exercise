import React from 'react'

export const LogosRow = ({col, rowStyles}) => {
  return (
    <div className={`w-1/4 flex flex-col justify-around ${rowStyles} border-white border-dotted`}>
      {
        col.map(item => <img key={item.id} src={item.link} alt={item.name} className={item.styles} />)
      }
    </div>
  )
}
