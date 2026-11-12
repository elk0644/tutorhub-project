import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Find a peer tutor in minutes</h1>
        <p>
          TutorHub connects university students with affordable help in programming courses.
        </p>
        <Link className="btn" to="/services">
          Browse subjects
        </Link>
      </section>

      <h2>Popular subjects</h2>

      <div className="grid">
        <ServiceCard s={services[0]} />
        <ServiceCard s={services[1]} />
        <ServiceCard s={services[2]} />
      </div>
    </div>
  );
}

export default Home;