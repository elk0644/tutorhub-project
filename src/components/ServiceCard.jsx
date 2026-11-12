import React from "react";
import { Link } from "react-router-dom";

function ServiceCard(props) {
  const service = props.s;

  return (
    <div className="card">
      <div className="icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
      <Link className="btn" to={"/services/" + service.id}>
        Details
      </Link>
    </div>
  );
}

export default ServiceCard;