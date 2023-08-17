import React from "react";
import { SectionTilte } from "..";
import { services } from "../../data/data";

const Services = () => {
  return (
    <section className="services">
      <SectionTilte title="Services" />
      <div className="services__center">
        {services.map(({ id, title, icon, info }) => (
          <article className="service" key={id}>
            <span>{icon}</span>
            <h6>{title}</h6>
            <p>{info}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
