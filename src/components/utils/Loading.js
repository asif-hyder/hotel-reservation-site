import React from 'react'
import { images } from '../../assets'

const Loading = () => {
  return (
    <div className='loading'>
        <h4>rooms data loading...</h4>
        <img src={images.loading} alt="" />
      
    </div>
  )
}

export default Loading
