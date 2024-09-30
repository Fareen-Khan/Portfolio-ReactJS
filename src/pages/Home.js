import React from "react";
import Spotify from "../components/Spotify";
import { motion } from "framer-motion";
import { textVariants, imageVariants } from "../animations/animations";

function Home() {
	return (
		<>
			<motion.div
				className="flex flex-col lg:flex-row items-center justify-center h-screen overflow-hidden px-4"
				initial="hidden"
				animate="visible"
			>
				<motion.div
					className="flex flex-col justify-center items-center w-full lg:w-1/2 text-center lg:text-left"
					variants={textVariants}
				>
					<motion.h1
						className="text-secondary text-4xl md:text-6xl lg:text-8xl xl:text-9xl mb-4"
						variants={textVariants}
					>
						Fareen Khan
					</motion.h1>
					<div className="flex space-x-4 mt-4">
					</div>
					<Spotify />
				</motion.div>

				<motion.img
					className="w-full lg:w-1/2 h-64 md:h-96 lg:h-full object-cover rounded-md mt-8 lg:mt-0"
					src="https://i.imgur.com/SBJHoNX.jpg"
					alt="Profile Picture"
					variants={imageVariants}
				/>
			</motion.div>
		</>
	);
}

export default Home;
