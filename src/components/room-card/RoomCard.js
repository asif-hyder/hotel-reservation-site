import React from 'react'
import { images } from '../../assets'
import { Link } from 'react-router-dom'

const defaultImg  = images.room1
const RoomCard = ({room : {name, slug,images,price}}) => {
  return (
    <article className='room'>
      <div className="room__img-container">
        <img src={images[0] || defaultImg} alt="" />
        <div className="price-top">
            <h6>${price}</h6>
            <p>per night</p>
        </div>
            <Link to={`/rooms/${slug}`} className='btn-primary room-link'>Features</Link>
        <div className="room__info">
            {name}
        </div>
      </div>
    </article>
  )
}

export default RoomCard
