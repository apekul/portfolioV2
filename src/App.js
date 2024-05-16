import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <About />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
