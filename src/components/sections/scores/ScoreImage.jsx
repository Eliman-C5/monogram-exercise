import React from 'react'

export const ScoreImage = ({link, name, styles}) => {
  return (
    <img src={link} alt={name} className={`${styles}`} />
  )
}
