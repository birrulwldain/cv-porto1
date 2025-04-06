import "../styles/_navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <h1 className="logo">Birrul</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
