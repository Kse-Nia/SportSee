import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="header">
        <div className="logo-container">
          <img src="/assets/logo.svg" alt="SportSee logo" />
        </div>
        <div className="header-NavLinks">
          <ul>
            <li>
              <NavLink href="/" className="header-NavLinks-NavLink">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink href="/account" className="header-NavLinks-NavLink">
                Profil
              </NavLink>
            </li>
            <li>
              <NavLink href="/parameters" className="header-NavLinks-NavLink">
                Règlage
              </NavLink>
            </li>
            <li>
              <NavLink href="/community" className="header-NavLinks-NavLink">
                Communauté
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
