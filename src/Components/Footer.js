import React from "react";
import {
  IoLocationSharp,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailSharp,
  IoDocumentAttach,
} from "react-icons/io5";

const contact = [
  {
    title: "location",
    text: "Warsaw, Poland",
    icon: <IoLocationSharp size={35} />,
  },
  {
    title: "mail",
    text: "adampekul@gmail.com",
    nav: "mailto:adampekul@gmail.com",
    icon: <IoMailSharp size={35} />,
  },
  {
    title: "CV",
    nav: "/resume.pdf",
    icon: <IoDocumentAttach size={35} />,
  },
];

function Footer() {
  return (
    <footer className="text-white">
      <div className="flex items-center justify-center bg-[#4F46E5]">
        <ul
          id="contact"
          className="Container w-full flex flex-col md:flex-row items-start md:items-center justify-center gap-10 py-10"
        >
          {contact.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <a
                href={item.nav ? item.nav : null}
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
              </a>
              <a
                href={item.nav ? item.nav : null}
                target="_blank"
                rel="noreferrer"
                className={`flex flex-col ${item.nav && "cursor-pointer"}`}
              >
                <label
                  className={`font-bold text-lg ${
                    item.nav && "cursor-pointer"
                  }`}
                >
                  {item.title}
                </label>
                <p>{item.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center bg-[#27272A]">
        <ul
          id="footer"
          className="Container w-full bg-[#27272A] py-5 font-bold flex flex-col-reverse md:flex-row gap-3 items-center justify-between"
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
            <a
              href="https://github.com/apekul"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub className="hover:scale-110 duration-150" />
            </a>
            <a
              href="https://www.linkedin.com/in/adam-p%C4%99kul/"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoLinkedin className="hover:scale-110 duration-150" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
