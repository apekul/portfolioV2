import React from "react";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoArrowUp,
} from "react-icons/io5";

function Footer() {
  return (
    <footer className="text-white">
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-indigo-500"></div>
      <div className="flex items-center justify-center bg-zinc-950">
        <ul
          id="footer"
          className="Container w-full bg-zinc-950 py-6 font-bold flex flex-col-reverse md:flex-row gap-5 items-center justify-between"
        >
          <li className="text-zinc-400 text-sm font-medium">
            © 2026{" "}
            <a
              target="_blank"
              href="https://github.com/apekul"
              rel="noreferrer"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Adam Pękul
            </a>{" "}
            · Built with React & Tailwind
          </li>
          <li className="flex gap-5 items-center text-[1.8rem]">
            <a
              href="https://github.com/apekul"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <IoLogoGithub className="hover:scale-110 hover:text-indigo-400 transition-all duration-150" />
            </a>
            <a
              href="https://www.linkedin.com/in/adam-p%C4%99kul/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <IoLogoLinkedin className="hover:scale-110 hover:text-indigo-400 transition-all duration-150" />
            </a>
          </li>
          <li>
            <a
              href="#hero"
              className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-indigo-400 transition-colors duration-150"
            >
              <IoArrowUp />
              Back to top
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
