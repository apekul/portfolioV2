import React from "react";
import {
  IoLocationSharp,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailSharp,
} from "react-icons/io5";
import { FaFile } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" text-white ">
      <ul
        id="contact"
        className="Container bg-blue-800 flex items-center justify-center h-[5rem] gap-5"
      >
        <li>Location</li>
        <li>Mail</li>
        <li>Cv</li>
      </ul>
      <ul
        id="footer"
        className="Container bg-[#27272A] py-5 font-bold flex flex-col-reverse md:flex-row gap-3 items-center justify-between"
      >
        <li>
          Copyright © 2024{" "}
          <a
            target="_blank"
            href="https://github.com/apekul"
            rel="noreferrer"
            className="text-blue-200 hover:text-blue-400"
          >
            apekul
          </a>
        </li>
        <li className="flex gap-5 items-center text-[2rem]">
          <a href="https://github.com/apekul" target="_blank" rel="noreferrer">
            <IoLogoGithub className="hover:scale-110" />
          </a>
          <a
            href="https://www.linkedin.com/in/adam-p%C4%99kul/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoLinkedin className="hover:scale-110" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
