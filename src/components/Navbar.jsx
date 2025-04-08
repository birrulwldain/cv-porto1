import { useState, useEffect } from "react";
import "../styles/_navbar.scss";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const handleToggle = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollY = window.scrollY + 150;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section && scrollY >= section.offsetTop) {
          setActiveSection(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar">
      <div className="logo">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        <span>Birrul Walidain</span>
      </div>
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        {["hero", "about", "skills", "projects", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={activeSection === section ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>
      <div className="menu-toggle" onClick={handleToggle}>
        <div className={`hamburger ${menuOpen ? "open" : ""}`}></div>
      </div>
    </header>
  );
}

export default Navbar;
