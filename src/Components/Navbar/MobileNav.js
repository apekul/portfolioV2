import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const MobileNav = ({ nav }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="flex justify-end font-bold text-zinc-600 w-full">
      <GiHamburgerMenu size="30" onClick={() => setShowNav(true)} />
      <ul
        className={`absolute flex lg:hidden flex-col items-end top-0 bg-zinc-100 text-3xl w-screen h-screen px-4 pt-3 gap-10 duration-500 transition-all
      ${showNav ? "right-0" : "-right-full"}
      ${showNav ? "" : "opacity-0 invisible"}
      `}
      >
        <AiOutlineClose
          size="30"
          className={`cursor-pointer `}
          onClick={() => setShowNav(false)}
        />
        {nav.map((v, i) => (
          <li
            key={i}
            className="hover:text-indigo-500 transition-all duration-200 pr-6"
          >
            <a href={`#${v.direction}`} onClick={() => setShowNav(false)}>
              {v.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
