import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";
import {
	textVariants,
  textDVariants,
} from "../animations/animations";

function ProjectList() {

   const [projects, setProjects] = useState([]);

		useEffect(() => {
			// Replace with your GitHub raw URL
      const url = process.env.REACT_APP_PROJECTS_JSON;

			fetch(url)
				.then((response) => response.json())
				.then((data) => setProjects(data.projects))
				.catch((error) => console.error("Error fetching data: ", error));
		}, []);


  return (
		<div className="flex h-screen w-full justify-center items-center">
			<motion.div
				className="w-full max-w-5xl h-screen overflow-y-auto overscroll-none no-scrollbar"
				initial="hidden"
				animate="visible"
			>
				{/* Animate the title */}
				<motion.h1
					className="text-secondary text-3xl md:text-5xl mt-10"
					variants={textVariants}
				>
					Projects
				</motion.h1>

				{/* Animate the grid of cards */}
				<motion.div variants={textDVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-items-center mt-16 mb-32 mx-8">
					{projects.map((item, index) => (
						<motion.div
							key={index}
							// Use alternate animations for left and right children
							variants={
								textDVariants
							}
							initial="hidden"
							animate="visible"
						>
							<Card
								img={item.img}
								title={item.title}
								description={item.description}
								link={item.link}
							/>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
}

export default ProjectList;
