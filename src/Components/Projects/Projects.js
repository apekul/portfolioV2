import React from "react";
import { projectData } from "../../ObjectData";
import { IoLogoGithub } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const data = [...projectData].reverse();
  return (
    <div
      id="projects"
      className="Container w-full flex flex-col items-center min-h-screen py-20"
    >
      <h1 className="font-bold text-4xl pb-5 text-start">Projects</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full xl:w-[1200px]">
        {Array.from({ length: 3 }, (_, index) => index).map((column, i) => {
          const sliceProjects = data.filter(
            (_, index) => (index - column) % 3 === 0
          );
          return (
            <li className="flex flex-col gap-10" key={i}>
              {sliceProjects.map((project, projectIndex) => (
                <article
                  className="border-2 rounded-md bg-white shadow-md"
                  key={projectIndex}
                >
                  <figure className="w-full overflow-hidden rounded-t-md">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="transition-all w-full h-auto ease-in-out duration-300 hover:scale-105 cursor-pointer"
                        src={project.img}
                        alt="project_img"
                      />
                    </a>
                  </figure>
                  <figcaption className="border-t-2 p-5">
                    <p className="text-2xl font-bold">{project.title}</p>
                    <p className="text-lg py-2 text-gray-700">
                      {project.shortDesc}
                    </p>
                    <div className="flex gap-2 justify-between mt-2">
                      <div className="flex gap-2  flex-wrap">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            className={`font-bold uppercase ${
                              [
                                "text-blue-500",
                                "text-green-500",
                                "text-red-500",
                                "text-yellow-500",
                                "text-purple-500",
                                "text-teal-500",
                                "text-orange-500",
                              ][techIndex % 7]
                            }`}
                            key={techIndex}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-5 text-2xl items-end">
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <IoLogoGithub className="hover:text-blue-500 hover:scale-125 transition-all duration-150 cursor-pointer" />
                        </a>
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaExternalLinkAlt className="hover:text-blue-500 hover:scale-125 transition-all duration-150 cursor-pointer" />
                          </a>
                        )}
                      </div>
                    </div>
                  </figcaption>
                </article>
              ))}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Projects;
