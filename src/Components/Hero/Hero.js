import React from "react";
import { ParticlesComponent } from "../Particles/ParticlesComponent";
import Image from "./Image";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import Tech from "./Tech";
function Hero() {
  return (
    <div id="hero" className="lg:h-screen h-full relative overflow-hidden">
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
      <div className="Container h-full my-20 lg:my-0 w-auto flex items-center justify-center">
        <div
          className={`flex bg-white p-5 rounded-md shadow-md bg-opacity-70 flex-col-reverse lg:flex-row gap-3 items-center lg:items-start`}
        >
          <ul className="text-xl max-w-[30rem] flex flex-col lg:items-start lg:text-start items-center text-center gap-5 justify-between">
            <li className="font-bold text-5xl lg:w-[20rem] ">
              Front-End Developer.
            </li>
            <li className="font-semibold">
              Hi, I'm Adam. A Junior Front-end React Developer based in Warsaw,
              Poland
            </li>
            <li>
              <Tech />
            </li>
            <li className="flex items-center gap-2 text-3xl">
              <a
                href="/"
                className="hover:scale-125 scla cursor-pointer transition-all duration-150 hover:text-blue-500"
              >
                <IoLogoLinkedin />
              </a>
              <a
                href="/"
                className="hover:scale-125 cursor-pointer transition-all duration-150 hover:text-blue-500"
              >
                <IoLogoGithub />
              </a>
            </li>
          </ul>
          <Image />
        </div>
      </div>
    </div>
  );
}

export default Hero;
