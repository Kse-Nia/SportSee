import Link from "next/link";
import Logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <>
      <div className="logo-container">
        <Logo />
      </div>
      <div className="nav-links">
        <Link href="/">Accueil</Link>
        <Link href="/account">Profil</Link>
        <Link href="/parameters">Règlage</Link>
        <Link href="/community">Communauté</Link>
      </div>
    </>
  );
}
