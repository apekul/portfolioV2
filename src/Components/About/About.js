import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import TechStack from "./TechStack";

function About() {
  return (
    <section id="about" className=" flex items-center justify-center py-20 relative overflow-hidden">
      <div className="Container relative">
        <div className="flex flex-col-reverse lg:flex-row gap-8 max-w-[1200px] w-full">
          <div className="w-full lg:w-1/3 p-8 gap-5 rounded-2xl glass-card text-center">
            <h2 className="font-bold text-2xl gradient-text pb-2">
              Technology I Work With
            </h2>
            <TechStack />
          </div>
          <div className="w-full lg:w-2/3 bg-zinc-900/70 border border-white/10 backdrop-blur-md p-8 rounded-2xl text-center lg:text-start shadow-lg shadow-black/30">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="font-bold text-4xl">
                About <span className="gradient-text">Me</span>
              </h1>
              <div className="text-green-400 flex items-center gap-2 py-2 font-bold">
                <AiOutlineCheckCircle size={25} />
                <p className="text-lg">Open to work</p>
              </div>
            </div>
            <p className="py-2 text-lg leading-relaxed text-zinc-300 font-medium">
              Frontend Developer with four years of commercial experience.
              I build the frontend of web products in the React/Next.js stack —
              from graphic design to deployment. I deliver high-quality,
              responsive user interfaces with a focus on performance,
              accessibility and attention to detail. <br /> <br /> I work
              closely with designers and backend teams, participate in code
              reviews, and occasionally step outside the frontend (Symfony,
              CI/CD, AWS). Open to new professional challenges — I'm eager to
              contribute to innovative teams where I can bring ideas to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
