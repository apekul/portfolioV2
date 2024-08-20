import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa6";
import MobileNav from "./MobileNav";

const nav = [
  { text: "home", direction: "hero" },
  { text: "about", direction: "about" },
  { text: "projects", direction: "projects" },
  { text: "contact", direction: "contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 100;

      // Check if the user has scrolled down past the threshold
      if (scrollTop > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`h-[3rem] flex items-center fixed justify-center w-full z-10 transition-colors duration-200 select-none ${
        scrolled ? "bg-white shadow-md text-black" : "text-white"
      }`}
    >
      <ul className="flex items-center justify-between w-full Container">
        <li>
          <a href="#hero">
            <FaCode size={25} />
          </a>
        </li>
        <li className="gap-5 hidden lg:flex">
          {nav.map((v, i) => (
            <a
              key={i}
              href={`#${v.direction}`}
              className="font-bold hover:text-blue-600 text-lg transition-all duration-150"
            >
              {v.text.toUpperCase()}
            </a>
          ))}
        </li>
        <li className="flex lg:hidden">
          <MobileNav nav={nav} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
