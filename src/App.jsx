// src/App.jsx
import Hero from "./components/Hero";
import About from "./components/About";
import "./styles/main.scss";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}


export default App;
