import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa6";
import MobileNav from "./MobileNav";

const nav = [
  { text: "home", direction: "hero" },
  { text: "about", direction: "about" },
  { text: "experience", direction: "experience" },
  { text: "projects", direction: "projects" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);

      let current = "hero";
      for (const item of nav) {
        const section = document.getElementById(item.direction);
        if (section && section.offsetTop - 140 <= scrollTop) {
          current = item.direction;
        }
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`h-[3.5rem] flex items-center fixed justify-center w-full z-10 transition-all duration-200 select-none ${
        scrolled
          ? "bg-zinc-900/80 backdrop-blur-md shadow-lg shadow-black/30 text-white"
          : "bg-transparent text-white"
      }`}
    >
      <ul className="flex items-center justify-between w-full Container">
        <li>
          <a
            href="#hero"
            className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
          >
            <FaCode size={25} />
          </a>
        </li>
        <li className="gap-6 hidden lg:flex">
          {nav.map((v) => (
            <a
              key={v.direction}
              href={`#${v.direction}`}
              className={`relative font-semibold tracking-wide transition-colors duration-150 ${
                active === v.direction
                  ? "text-indigo-400"
                  : "hover:text-indigo-400"
              }`}
            >
              {v.text.toUpperCase()}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-fuchsia-400 transition-all duration-300 ${
                  active === v.direction ? "w-full" : "w-0"
                }`}
              ></span>
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
