import React from "react";

import Projects from "./data/projectData.json";
import Card from "../components/Card";
import { motion } from "framer-motion";

function ProjectList() {
  return (
    <motion.div
      className="flex flex-col justify-center items-center h-full overflow-y-hidden"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-secondary text-5xl">Projects</h1>
      <br />
      <div className="grid grid-cols-3 gap-x-10 justify-items-center">
        {Projects.projects.map((item) => (
          <Card
            img={item.img}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectList;
