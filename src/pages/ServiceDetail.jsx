import { useParams, Link } from "react-router-dom";
import { services } from "../data";

// Dynamic page: /services/:id
export default function ServiceDetail() {
  const { id } = useParams();
  const s = services.find((x) => x.id === id);
  if (!s) return <><h2>Service not found</h2><Link to="/services">Back</Link></>;
  return (
    <div className="card">
      <div className="icon">{s.icon}</div>
      <h1>{s.title}</h1>
      <p>{s.details}</p>
      <p><b>Price:</b> ${s.price} / hour</p>
      <Link className="btn" to="/contact">Book now</Link>{" "}
      <Link to="/services">← Back</Link>
    </div>
  );
}
