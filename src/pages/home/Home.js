import React from "react";
import { FeatureRoom, Hero, HeroBanner, Services } from "../../components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero>
        <HeroBanner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </HeroBanner>
      </Hero>
      <Services />
      <FeatureRoom />
    </>
  );
};

export default Home;
