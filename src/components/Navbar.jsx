import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="nav">
      <div className="container nav-inner">
        <span className="logo">🎓 TutorHub</span>

        <button className="burger" onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </button>

        <nav className={open ? "links open" : "links"}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;