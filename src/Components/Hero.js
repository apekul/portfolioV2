import React from "react";
import { ParticlesComponent } from "./Particles/ParticlesComponent";

function Hero() {
  return (
    <div id="hero" className="h-screen relative overflow-hidden">
      <div className="Container h-full items-center flex justify-center  z-20">
        Hero
      </div>
      <div
        className="particles-container"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <ParticlesComponent />
      </div>
    </div>
  );
}

export default Hero;
