import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

function Services() {
  return (
    <div>
      <h1>Services</h1>

      <div className="grid">
        {services.map(function (service) {
          return <ServiceCard key={service.id} s={service} />;
        })}
      </div>
    </div>
  );
}

export default Services;