import React from "react";

const tech = [
  "html",
  "css",
  "js",
  "ts",
  "react",
  "express",
  "nodejs",
  "tailwindcss",
  "sass",
  "styledcomponents",
  "materialui",
  "figma",
  "xd",
  "mongodb",
  "netlify",
  "redux",
];

const TechStack = () => {
  return (
    <ul className="gap-5 py-5 inline-grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {tech.map((v, i) => (
        <li
          key={i}
          className="hover:scale-110 duration-200 ease-in-out cursor-pointer flex justify-center"
        >
          <img
            src={`https://skillicons.dev/icons?i=${v}`}
            alt={`${v} icon`}
            className="w-16 h-16"
          />
        </li>
      ))}
    </ul>
  );
};

export default TechStack;
