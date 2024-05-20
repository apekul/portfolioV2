import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const items = [
    { id: "1", title: "E-commerce", subtitle: "Subtitle 1" },
    { id: "2", title: "Billater", subtitle: "Subtitle 2" },
    { id: "3", title: "Drinkology", subtitle: "Subtitle 3" },
    { id: "4", title: "Task Management App", subtitle: "Subtitle 3" },
    { id: "5", title: "JobBoard", subtitle: "Subtitle 3" },
    { id: "6", title: "Weather App", subtitle: "Subtitle 3" },
  ];

  // Function to toggle selectedId
  const toggleSelectedId = (id) => {
    if (selectedId) {
      setSelectedId(null); // Close the currently selected item
    } else {
      setSelectedId(id); // Open the clicked item
    }
  };
  return (
    <div id="projects" className="ProjectsContainer Container py-10 ">
      Projects
      <div className="w-[1200px] bg-red-200 grid grid-cols-3 h-[40rem] relative">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            onClick={() => toggleSelectedId(item.id)}
            className="item"
            style={{
              opacity: !selectedId ? 1 : 0.5, // Lower opacity for unselected items
            }}
          >
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
            <motion.div>Image</motion.div>
          </motion.div>
        ))}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              className="expanded-item"
              transition={{ duration: 0.3 }}
            >
              {items
                .filter((item) => item.id === selectedId)
                .map((item) => (
                  <div key={item.id}>
                    <motion.h5>{item.subtitle}</motion.h5>
                    <motion.h2>{item.title}</motion.h2>
                    <motion.p>{item.title}</motion.p>

                    <motion.button onClick={() => toggleSelectedId(item.id)}>
                      Close
                    </motion.button>
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
