import { Link } from "react-router-dom";

export default function ServiceCard({ s }) {
  return (
    <div className="card">
      <div className="icon">{s.icon}</div>
      <h3>{s.title}</h3>
      <p>{s.desc}</p>
      <Link className="btn" to={`/services/${s.id}`}>Details</Link>
    </div>
  );
}
