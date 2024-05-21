import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import { projectData } from "../../ObjectData";
import { IoLogoGithub } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import randomColor from "randomcolor";

function Projects() {
  const [selectedId, setSelectedId] = useState(null);

  const randomStyle = {
    backgroundColor: randomColor({ luminosity: "light" }),
  };

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
      className="ProjectsContainer Container min-h-screen py-10 "
    >
      <h1 className="w-[1200px] font-bold text-4xl pb-5 text-start">
        Projects
      </h1>
      <div className="w-[1200px] bg-gray-100  grid grid-cols-3 relative">
        <AnimatePresence>
          {projectData.map((item) => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              onClick={() => toggleSelectedId(item.id)}
              className="item flex flex-col bg-white"
              style={{
                opacity: !selectedId ? 1 : 0.5, // Lower opacity for unselected items
              }}
            >
              <div>
                <span className="flex items-center justify-between">
                  <h2 className=" font-bold text-xl">{item.title}</h2>
                  <div className="flex gap-2 text-lg">
                    {item.links.github && (
                      <a href={item.links.github} className="hover:scale-125">
                        <IoLogoGithub />
                      </a>
                    )}
                    {item.links.demo && (
                      <a href={item.links.demo} className="hover:scale-125">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </span>
                <p className="py-2">{item.shortDesc}</p>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full shadow-md h-[15rem] rounded-md object-cover object-left-top overflow-hidden"
                />
              </div>

              {/* tech */}
              <div className="flex gap-2 overflow-auto py-2">
                {item.tech.map((tech, index) => (
                  <p
                    className="py-1 px-2 rounded-md text-nowrap font-semibold text-gray-900"
                    style={{
                      backgroundColor: randomColor({ luminosity: "light" }),
                    }}
                  >
                    {tech.toUpperCase()}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedId} className="expanded-item">
              {projectData
                .filter((item) => item.id === selectedId)
                .map((item) => (
                  <div
                    key={item.id}
                    className="relative flex-1 p-5 flex flex-col justify-between h-full shadow-xl"
                  >
                    <button
                      className="absolute top-0 right-0 m-2"
                      onClick={() => toggleSelectedId(item.id)}
                    >
                      Close
                    </button>
                    <h2 className=" font-bold text-4xl text-center">
                      {item.title}
                    </h2>
                    <p className="py-2  font-semibold">{item.description}</p>
                    <div className="overflow-hidden my-2 border-2 shadow-md">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full rounded-md object-cover object-top hover:object-bottom duration-[5000ms] cursor-pointer"
                      />
                    </div>

                    <div className="flex items-start justify-between">
                      {/* tech */}
                      <div className="flex gap-2 flex-wrap ">
                        {item.tech.map((tech, index) => (
                          <p
                            className="py-1 px-2 rounded-md text-nowrap font-semibold text-gray-900"
                            style={{
                              backgroundColor: randomColor({
                                luminosity: "light",
                              }),
                            }}
                          >
                            {tech.toUpperCase()}
                          </p>
                        ))}
                      </div>
                      {/* links */}
                      <div className="flex gap-2 text-2xl mt-2">
                        {item.links.github && (
                          <a
                            href={item.links.github}
                            className="hover:scale-125"
                          >
                            <IoLogoGithub />
                          </a>
                        )}
                        {item.links.demo && (
                          <a href={item.links.demo} className="hover:scale-125">
                            <FaExternalLinkAlt />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Projects;
