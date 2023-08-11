import React from 'react'
import RoomCard from '../room-card/RoomCard'

const RoomsList = ({rooms}) => {
    if(rooms.length === 0){
        return(
            <div className="empty-search">
                <h3>
                    unfortunately no rooms matched your search parameters
                </h3>
            </div>
        )
    }
  return (
    <div className='rooms__list'>
        <div className="rooms__list-center">
            {
                rooms.map( room => (
                    <RoomCard key={room.id} room={room}/>
                ))
            }
        </div>
    </div>
  )
}

export default RoomsList
