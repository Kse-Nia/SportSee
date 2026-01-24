import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src="/public/logo.svg" alt="SportSee logo" />
        </div>
        <div className="navbar__links">
          <ul>
            <li>
              <Link to="/" className="navbar__link">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/account" className="navbar__link">
                Profil
              </Link>
            </li>
            <li>
              <Link to="/parameters" className="navbar__link">
                Règlages
              </Link>
            </li>
            <li>
              <Link to="/community" className="navbar__link">
                Communauté
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
