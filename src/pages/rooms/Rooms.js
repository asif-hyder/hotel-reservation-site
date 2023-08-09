import React from "react";
import { Hero, HeroBanner } from "../../components";
import { Link } from "react-router-dom";
import { images } from "../../assets";

const Rooms = () => {
  return (
    <Hero heroClass="roomsHero" bgImg={images.room1}>
      <HeroBanner title="our rooms">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </HeroBanner>
    </Hero>
  );
};

export default Rooms;
