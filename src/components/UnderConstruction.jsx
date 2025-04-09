// src/components/UnderConstruction.jsx
import { motion as Motion } from "framer-motion";

import "../styles/_under-construction.scss";

function UnderConstruction() {
  return (
    <main className="under-construction">
      {/* Typography background bergerak */}
      <div className="background-pattern" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`text-row ${i % 2 === 0 ? "scroll-left" : "scroll-right"}`}
          >
            <span>{"Birrul Walidain ".repeat(30)}</span>
          </div>
        ))}
      </div>

      {/* Gambar & Teks */}
      <Motion.img
        src="/einstein.jpg"
        alt="Einstein"
        className="einstein-img"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <Motion.h1
        className="headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Portofolio sedang dalam pengembangan oleh Birrul Walidain
      </Motion.h1>

      <Motion.p
        className="subtext"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Stay tuned! Situs ini akan segera hadir setelah S.Si
      </Motion.p>
    </main>
  );
}

export default UnderConstruction;
