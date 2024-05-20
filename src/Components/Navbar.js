import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa6";

const nav = [
  { text: "Home", location: "" },
  { text: "About", location: "" },
  { text: "Projects", location: "" },
  { text: "Contact", location: "" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 100; // Adjust this value as needed

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
      className={`Container h-[3rem] flex items-center fixed top-0 w-full z-10 transition-colors duration-200 ${
        scrolled ? "bg-white shadow-md text-black" : "text-white"
      }`}
    >
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
