import React, { useContext } from "react";
import {
  Hero,
  HeroBanner,
  Loading,
  RoomFilter,
  RoomsList,
} from "../../components";
import { Link } from "react-router-dom";
import { images } from "../../assets";
import RoomContext from "../../context/rooms/roomContext";

const Rooms = () => {
  const { loading, rooms, sortedRooms } = useContext(RoomContext);
  return (
    <>
      <Hero heroClass="roomsHero" bgImg={images.img12}>
        <HeroBanner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </HeroBanner>
      </Hero>
      <section>
        <RoomFilter rooms={rooms} />
        {loading ? <Loading /> : <RoomsList rooms={sortedRooms} />}
      </section>
    </>
  );
};

export default Rooms;
