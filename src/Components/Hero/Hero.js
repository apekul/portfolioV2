import React from "react";
import { ParticlesComponent } from "../Particles/ParticlesComponent";
import Image from "./Image";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import Tech from "./Tech";
function Hero() {
  return (
    <div
      id="hero"
      className="lg:h-auto h-full flex items-center justify-center relative overflow-hidden shadow-md shadow-black bg-zinc-950"
    >
      <div
        className="particles-container"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <ParticlesComponent />
      </div>
      <div className="dot-grid pointer-events-none absolute inset-0 z-[1]"></div>
      <div className="Container h-full lg:py-56 my-20 lg:my-0 w-auto flex items-center justify-center relative z-[3]">
        <div className="flex text-white flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">
          <ul className="text-xl max-w-[30rem] flex flex-col lg:items-start lg:text-start items-center text-center gap-6">
            <li className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
              Hi, I'm Adam
            </li>
            <li className="font-bold text-4xl lg:text-5xl lg:w-[24rem] leading-tight">
              Front-End{" "}
              <span className="gradient-text">Developer.</span>
            </li>
            <li className="font-medium text-zinc-300 leading-relaxed">
              Frontend Developer with 4 years of commercial experience building
              web products in React and Next.js — from design to deployment.
              Currently working on a fintech crowdfunding platform.
            </li>
            <li>
              <Tech />
            </li>
            <li className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-400 hover:to-fuchsia-400 transition-all duration-200 shadow-lg shadow-indigo-500/25"
              >
                View my work
              </a>
            </li>
            <li className="flex items-center gap-3 text-3xl pt-2">
              <a
                href="https://www.linkedin.com/in/adam-p%C4%99kul/"
                target="_blank"
                className="hover:scale-125 cursor-pointer transition-all duration-150 hover:text-indigo-400"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <IoLogoLinkedin />
              </a>
              <a
                href="https://github.com/apekul"
                target="_blank"
                className="hover:scale-125 cursor-pointer transition-all duration-150 hover:text-indigo-400"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <IoLogoGithub />
              </a>
            </li>
          </ul>
          <Image />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent z-[2]"></div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-400 z-[3] animate-bounce">
        <IoChevronDown size={28} />
      </div>
    </div>
  );
}

export default Hero;
