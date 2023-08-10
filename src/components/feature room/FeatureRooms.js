import React, { useContext } from "react";
import RoomContext from "../../context/rooms/roomContext";
import { Loading, RoomCard } from "../";

const FeatureRooms = () => {
  const { loading, featuredRooms } = useContext(RoomContext);
  return (
    <section className="featured__rooms">
      <div className="featured__rooms-center">
        {loading ? (
          <Loading />
        ) : (
          featuredRooms.map((room) => <RoomCard key={room.id} room={room} />)
        )}
      </div>
    </section>
  );
};

export default FeatureRooms;
