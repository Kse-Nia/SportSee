import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__logo">
          <img src="/logo.svg" alt="SportSee Logo" />
        </div>
        <ul className="navbar__links">
          <li className="navbar__item">
            <NavLink to="/" className="navbar__link">
              Accueil
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/profile" className="navbar__link">
              Profil
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/settings" className="navbar__link">
              Réglage
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/community" className="navbar__link">
              Communauté
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
