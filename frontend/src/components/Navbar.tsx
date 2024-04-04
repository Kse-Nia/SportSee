import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="header">
        <div className="logo-container">
          <img src="/assets/logo.svg" alt="SportSee logo" />
        </div>
        <div className="header-links">
          <ul>
            <li>
              <Link href="/" className="header-links-link">Accueil</Link>
            </li>
            <li>
              <Link href="/account" className="header-links-link">Profil</Link>
            </li>
            <li>
              <Link href="/parameters" className="header-links-link">Règlage</Link>
            </li>
            <li>
              <Link href="/community" className="header-links-link">Communauté</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
