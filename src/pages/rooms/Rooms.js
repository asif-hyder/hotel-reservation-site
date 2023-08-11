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
  const context = useContext(RoomContext);
  // console.log(context)
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
        <RoomFilter context={context} />
        {context.loading ? <Loading /> : <RoomsList rooms={context.sortedRooms} />}
      </section>
    </>
  );
};

export default Rooms;
