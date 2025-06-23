import React from 'react';
import '../styles/_hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Creative Director Portfolio</h1>
      <p>Showcasing expertise in Photography, Videography, and Brand Design</p>
      <button onClick={() => window.location.href = '#portfolio'}>View Work</button>
    </section>
  );
};

export default Hero;