import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Find a peer tutor in minutes</h1>
        <p>TutorHub connects university students with affordable help in programming courses.</p>
        <Link className="btn" to="/services">Browse subjects</Link>
      </section>
      <h2>Popular subjects</h2>
      <div className="grid">{services.slice(0, 3).map((s) => <ServiceCard key={s.id} s={s} />)}</div>
    </>
  );
}
