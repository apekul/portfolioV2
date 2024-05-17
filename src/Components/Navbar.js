import React from "react";
import { FaCode } from "react-icons/fa6";

const nav = [
  { text: "Home", location: "" },
  { text: "About", location: "" },
  { text: "Projects", location: "" },
  { text: "Contact", location: "" },
];

function Navbar() {
  return (
    <nav className="Container h-[3rem] flex items-center shadow-md sticky top-0 w-full z-0 bg-white">
      <ul className="flex items-center justify-between w-full">
        <li>
          <FaCode size={25} />
        </li>
        <li className="flex gap-5">
          {nav.map((v, i) => (
            <a
              key={i}
              href="/"
              className="font-bold hover:text-blue-600 text-lg transition-all duration-150"
            >
              {v.text}
            </a>
          ))}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
