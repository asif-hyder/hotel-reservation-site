import React from "react";
import { Hero, HeroBanner } from "../../components";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Hero>
      <HeroBanner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </HeroBanner>
    </Hero>
  );
};

export default ErrorPage;
