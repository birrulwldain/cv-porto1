import "../styles/_hero.scss";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I’m Birrul</h1>
        <p className="hero-subtitle">Creative Frontend Developer</p>
        <a href="#about" className="hero-btn">
          About Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
