import React from "react";
import Projects from "./data/projectData.json";
import Card from "../components/Card";
import { motion } from "framer-motion";

function ProjectList() {
  return (
    <motion.div
      className="flex flex-col justify-center items-center h-screen px-4 pb-16 pt-4"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-secondary text-3xl md:text-5xl">
        Projects
      </h1>
      <br />
      <div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overscroll-y-contain md:gap-6 lg:gap-8 justify-items-center overflow-y-scroll md:overflow-visible ">
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
