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
      <ul className="Container bg-blue-800 flex items-center justify-center h-[5rem] gap-5">
        <li>Location</li>
        <li>Mail</li>
        <li>Cv</li>
      </ul>
      <ul className="Container bg-[#27272A] py-5 font-bold flex items-center justify-between">
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
          <IoLogoGithub className="hover:scale-110" />
          <IoLogoLinkedin className="hover:scale-110" />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
