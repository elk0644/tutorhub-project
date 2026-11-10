import { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

export default function Services() {
  const [q, setQ] = useState("");
  const list = services.filter((s) => s.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <h1>Services</h1>
      <input className="field" placeholder="Search a subject..." value={q} onChange={(e) => setQ(e.target.value)} />
      <div className="grid">{list.map((s) => <ServiceCard key={s.id} s={s} />)}</div>
      {list.length === 0 && <p>No subject found.</p>}
    </>
  );
}
