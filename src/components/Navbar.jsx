import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [["/", "Home"], ["/about", "About"], ["/services", "Services"], ["/contact", "Contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <span className="logo">🎓 TutorHub</span>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
        <nav className={open ? "links open" : "links"}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)}>{label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
