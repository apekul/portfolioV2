import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import { projectData } from "../../ObjectData";
import { IoLogoGithub } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import randomColor from "randomcolor";

function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  // Function to toggle selectedId
  const toggleSelectedId = (id) => {
    if (selectedId) {
      setSelectedId(null); // Close the currently selected item
    } else {
      setSelectedId(id); // Open the clicked item
    }
  };
  return (
    <div
      id="projects"
      className="ProjectsContainer Container min-h-screen py-20"
    >
      <h1 className=" font-bold text-4xl pb-5 text-start">Projects</h1>
      {/* <ul className="bg-red-200 w-full xl:w-[1200px] grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 relative gap-5 "> */}
      {/* {projectData.map((project, index) => (
          <li className="bg-blue-200">
            <img />
            <header>
              <p>title</p>
              <p>shortDesc</p>
              <p>Tech</p>
            </header>
          </li>
        ))} */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full xl:w-[1200px]">
        {Array.from({ length: 3 }, (_, index) => index).map((column, i) => {
          const sliceProjects = projectData.filter(
            (_, index) => (index - column) % 3 === 0
          );
          return (
            <div className="flex flex-col gap-10" key={i}>
              {sliceProjects.map((project, projectIndex) => (
                <div className="border-2 p-10" key={projectIndex}>
                  <div>{project.id}</div>
                  <img
                    className="h-auto  rounded-lg object-cover"
                    src={project.img}
                    alt=""
                  />
                </div>
              ))}
            </div>
          );
        })}
        {/* <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
          </div>
        </div> */}
        {/*  */}
      </div>

      {/* </ul> */}
    </div>
  );
}

export default Projects;
