import React from "react";
import { useParams, Link } from "react-router-dom";
import { services } from "../data";

function ServiceDetail() {
  const { id } = useParams();

  let service = null;
  for (let i = 0; i < services.length; i++) {
    if (services[i].id === id) {
      service = services[i];
    }
  }

  return (
    <div className="card">
      <div className="icon">{service.icon}</div>
      <h1>{service.title}</h1>
      <p>{service.details}</p>
      <p>
        <b>Price:</b> ${service.price} / hour
      </p>

      <Link className="btn" to="/contact">
        Book now
      </Link>{" "}
      <Link to="/services">← Back</Link>
    </div>
  );
}

export default ServiceDetail;