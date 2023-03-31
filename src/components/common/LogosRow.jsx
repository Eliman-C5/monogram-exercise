import React from 'react'

export const LogosRow = ({col, index}) => {
  return (
    <div className={`w-1/4 flex flex-col justify-around ${index === 0 ? 'border-r border-l' : 'border-r'} pt-[35%] border-white border-dotted`}>
      {
        col.map(item => <img key={item.id} src={item.link} alt={item.name} className={`${index === 2 ? 'my-auto' : 'my-4'}`} />)
      }
    </div>
  )
}
