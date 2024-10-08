import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen ">
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
