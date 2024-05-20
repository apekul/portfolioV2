import React from "react";

const Tech = () => {
  return (
    <ul className="mt-10 grid grid-cols-2 md:flex grid-rows-2 gap-5 w-fit md:justify-start relative">
      <p className="block md:hidden absolute font-bold -top-10 left-4">
        Tech Stack
      </p>
      <div className="block md:hidden absolute -top-3 left-0 bg-black w-full h-[1px]"></div>
      <p className="hidden md:block font-bold">Tech Stack | </p>
      <li className="hover:scale-110 duration-200 ease-in-out cursor-pointer">
        <img
          src="https://skillicons.dev/icons?i=html,css&perline=1"
          alt="icon"
        />
      </li>
      <li className="hover:scale-110 duration-200 ease-in-out cursor-pointer">
        <img src="https://skillicons.dev/icons?i=js,ts&perline=1" alt="icon" />
      </li>
      <li className="hover:scale-110 duration-200 ease-in-out cursor-pointer">
        <img
          src="https://skillicons.dev/icons?i=react,express&perline=1"
          alt="icon"
        />
      </li>
      <li className="hover:scale-110 duration-200 ease-in-out cursor-pointer">
        <img
          src="https://skillicons.dev/icons?i=tailwindcss,sass&perline=1"
          alt="icon"
        />
      </li>
    </ul>
  );
};

export default Tech;
