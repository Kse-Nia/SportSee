import React from "react";
import Logo from "../assets/logo.svg";

function Navbar() {
  return (
    <header>
      <div>
        <img src={Logo} alt="Sportsee" />
      </div>
      <nav>
        <ul>
          <li className="link">Accueil</li>
          <li className="link">Profil</li>
          <li className="link">Règlages</li>
          <li className="link">Communauté</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
