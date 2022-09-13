import React from "react";
import { NavLink } from "react-router-dom";

import './Navbar.css';
import LogoComp from "./LogoComp";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container header">
        <a href="/" className=""><LogoComp /></a>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar