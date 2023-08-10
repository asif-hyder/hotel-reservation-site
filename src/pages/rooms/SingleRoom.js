import React, { useEffect } from 'react'
import { Hero } from '../../components'

const SingleRoom = (props) => {
  useEffect(() => {
    
    console.log(props)
},[props])
  return (
    <Hero heroClass='roomsHero'></Hero>
  )
}

export default SingleRoom
