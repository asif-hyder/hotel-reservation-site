import React from 'react'

const HeroBanner = ({children, title, subtitle}) => {
  return (
    <div className='banner'>
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  )
}

export default HeroBanner
