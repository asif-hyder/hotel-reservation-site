import React, { useContext} from 'react'
import { Hero, HeroBanner } from '../../components'
import { useParams } from 'react-router-dom'
import { images } from '../../assets'
import RoomContext from '../../context/rooms/roomContext'
import { Link } from 'react-router-dom'

const defaultImg = images.room1 

const SingleRoom = () => {
  const {slug} = useParams()
  const state ={
    slug: slug,
    defaultImg: defaultImg
  }
  const {getRoom} = useContext(RoomContext) 
  const room = getRoom(state.slug)

  if(!room){
    return(
      <div className="error">
        <h2>no such room could be found ... </h2>
        <Link to="/rooms" className='btn-primary'>
          back to rooms
        </Link>
      </div>
    )
  }
  const {name, description, capacity,size, price, extras, breakfast, pets, images} = room
  
  return (
    <>
   
    <Hero heroClass='roomsHero' bgImg={images[0] || state.defaultImg}>
      <HeroBanner title={`${name} room`}>
        <Link to="/rooms" className='btn-primary'>
          Back to rooms
        </Link>
      </HeroBanner>
    </Hero>
    <section className="single__room">
        <div className="single__room-images">
          {
            images.map((img, i)=>(
              <img src={img} key={i} alt='room img'/>
            ))
          }
        </div>
        <div className="single__room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>Price : ${price}</h6>
            <h6>Size : {size} SQFT</h6>
            <h6>Max Capacity : 
              {
                capacity > 1 ? ` ${capacity} people` : ` ${capacity} person` 
              }
            </h6>
            <h6>{pets ? "Pets allowed" : "no Pets allowed"}</h6>
            <h6>{breakfast && "Free Breakfast included "}</h6>
          </article>
        </div>
    </section>
    <section className="room__extras">
      <h6>extras</h6>
      <ul className="extras">
        {
          extras.map((item, i) => (
            <li key={i} >- {item} </li>
          ))
        }
      </ul>
    </section>
    </>
  )
}

export default SingleRoom
