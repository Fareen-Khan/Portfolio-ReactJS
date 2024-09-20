import React, { useEffect, useState } from "react";
// import Projects from "./data/projectData.json";
import Card from "../components/Card";
import { motion } from "framer-motion";

function ProjectList() {

   const [projects, setProjects] = useState([]);

		useEffect(() => {
			// Replace with your GitHub raw URL
			const url = "https://fareen-khan.github.io/projectsJSON/projectData.json";

			fetch(url)
				.then((response) => response.json())
				.then((data) => setProjects(data.projects))
				.catch((error) => console.error("Error fetching data: ", error));
		}, []);


  return (
    <div className="flex h-screen w-full justify-center items-center">
      <motion.div
        className="w-full max-w-5xl h-screen overflow-y-auto overscroll-none no-scrollbar"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-secondary text-3xl md:text-5xl mt-10">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-items-center mt-16 mb-32 mx-8">
          {projects.map((item) => (
            <Card
              img={item.img}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectList;
