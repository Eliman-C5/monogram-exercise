import React from 'react'

const Section = ({styles, children, margins = 'my-[80px] md:my-[120px]'}) => {
  return (
    <section className={`w-4/5 mx-auto max-w-[1512px] ${margins} ${styles}`}>
      {children}
    </section>
  )
}

export default Section