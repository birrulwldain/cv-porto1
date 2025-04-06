// src/App.jsx
import Hero from "./components/Hero";
import About from "./components/About";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <h1>Hello from App</h1>
      <Hero />
      <About />
    </div>
  );
}


export default App;
