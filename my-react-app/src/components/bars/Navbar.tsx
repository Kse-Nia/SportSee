// components/Navbar/Navbar.tsx
import { NavLink } from "react-router-dom";
import ToggleDataSwitch from "../Button/ToggleDataSwitch.js";

interface NavbarProps {
  useMock: boolean;
  onToggle: () => void;
}

export default function Navbar({ useMock, onToggle }: NavbarProps) {
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
        <div className="navbar__toggle">
          <span className="navbar__toggle-label">
            {useMock ? "MockUp" : "API"}
          </span>
          <ToggleDataSwitch
            checked={useMock}
            onChange={onToggle}
            label="Basculer entre Backend Server et mockup local"
          />
        </div>
      </nav>
    </header>
  );
}
