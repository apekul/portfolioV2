import React from "react";
import { ParticlesComponent } from "../Particles/ParticlesComponent";
import Image from "./Image";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import Tech from "./Tech";
function Hero() {
  return (
    <div
      id="hero"
      className="lg:h-auto h-full flex items-center justify-center relative overflow-hidden shadow-md shadow-black"
    >
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
      <div className="Container h-full lg:py-52 my-20 lg:my-0 w-auto flex items-center justify-center">
        <div
          className={`flex text-white p-5 rounded-md  flex-col-reverse lg:flex-row gap-3 items-center lg:items-start`}
        >
          <ul className="text-xl max-w-[30rem] flex flex-col lg:items-start lg:text-start items-center text-center gap-5 justify-between">
            <li className="font-bold text-3xl lg:text-5xl lg:w-[20rem] ">
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
                href="https://www.linkedin.com/in/adam-p%C4%99kul/"
                target="_blank"
                className="hover:scale-125 scla cursor-pointer transition-all duration-150 hover:text-blue-500"
                rel="noreferrer"
              >
                <IoLogoLinkedin />
              </a>
              <a
                href="https://github.com/apekul"
                target="_blank"
                className="hover:scale-125 cursor-pointer transition-all duration-150 hover:text-blue-500"
                rel="noreferrer"
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
