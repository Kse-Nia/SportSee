import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="header">
        <div className="logo-container">
          <img src="/public/logo.svg" alt="SportSee logo" />
        </div>
        <div className="header-links">
          <ul>
            <li>
              <Link to="/" className="header-links-link">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/account" className="header-links-link">
                Profil
              </Link>
            </li>
            <li>
              <Link to="/parameters" className="header-links-link">
                Règlage
              </Link>
            </li>
            <li>
              <Link to="/community" className="header-links-link">
                Communauté
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
