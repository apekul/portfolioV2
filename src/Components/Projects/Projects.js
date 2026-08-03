import React from "react";
import { projectData } from "../../ObjectData";
import { IoLogoGithub } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const data = [...projectData];
  return (
    <section
      id="projects"
      className="w-full flex flex-col items-center min-h-screen py-20 relative overflow-hidden bg-zinc-950"
    >
      <div className="Container relative">
        <h1 className="font-bold text-4xl pb-2 text-center">
          My <span className="gradient-text">Projects</span>
        </h1>
        <p className="text-center text-zinc-400 pb-12 max-w-xl mx-auto">
          A selection of things I've built — from full-stack applications to
          polished UI challenges.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full xl:w-[1200px]">
          {data.map((project) => (
            <li key={project.id} className="flex">
              <article className="glass-card rounded-2xl overflow-hidden shadow-lg shadow-black/40 hover:shadow-indigo-500/10 hover:-translate-y-1 hover:border-indigo-400/40 transition-all duration-300 flex flex-col w-full">
                <figure className="w-full overflow-hidden">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="transition-all w-full aspect-[16/10] object-cover ease-in-out duration-300 hover:scale-105 cursor-pointer"
                      src={project.img}
                      alt="project_img"
                    />
                  </a>
                </figure>
                <figcaption className="border-t border-white/10 p-6 flex flex-col flex-1">
                  <p className="text-xl font-bold">{project.title}</p>
                  <p className="py-3 text-zinc-400 flex-1">
                    {project.shortDesc}
                  </p>
                  <div className="flex gap-2 justify-between mt-2 items-end">
                    <div className="flex gap-2 flex-wrap">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-0.5 rounded-md text-xs font-semibold uppercase bg-white/5 border border-white/10 text-zinc-300 hover:border-indigo-400/50 hover:text-indigo-300 transition-colors duration-150"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 text-xl items-end shrink-0">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub repository"
                      >
                        <IoLogoGithub className="hover:text-indigo-400 hover:scale-125 transition-all duration-150 cursor-pointer" />
                      </a>
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Live demo"
                        >
                          <FaExternalLinkAlt className="hover:text-indigo-400 hover:scale-125 transition-all duration-150 cursor-pointer" />
                        </a>
                      )}
                    </div>
                  </div>
                </figcaption>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
