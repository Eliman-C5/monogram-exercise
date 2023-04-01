import React from 'react'

export const InnerBorders = ({children, styles}) => {
  return (
    <div className={`${styles} absolute top-0 bottom-0`}>
      {children}
    </div>
  )
}
