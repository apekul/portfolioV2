import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import TechStack from "./TechStack";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen Container flex items-center justify-center py-20 lg:py-0"
    >
      <div className="flex flex-col-reverse lg:flex-row gap-5 max-w-[1200px] w-full">
        <div className="w-full lg:w-1/3 p-5 gap-5 rounded-md text-center">
          <h2 className="font-bold text-2xl">Technology I Work With</h2>
          <TechStack />
        </div>
        <div className="w-full lg:w-2/3 bg-gray-100 p-5 rounded-md text-center lg:text-start shadow-md">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="font-bold text-4xl ">About Me</h1>
            <div className="text-green-500 flex items-center gap-2 py-2 font-bold">
              <AiOutlineCheckCircle size={25} />
              <p className="text-lg">Open to work</p>
            </div>
          </div>
          <p className="py-2 text-xl font-semibold">
            Freelance Frontend Developer with three years of hands-on experience
            in JavaScript and React, and a solid foundation in web development
            projects. I specialize in delivering high-quality, responsive user
            interfaces with a strong focus on excellent communication and
            meticulous attention to detail. <br /> <br /> Passionate about
            creating intuitive and visually appealing web experiences, I am
            eager to collaborate with innovative teams and clients to bring
            their ideas to life. My goal is to leverage my extensive frontend
            experience to deliver exceptional results on diverse freelance
            projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
