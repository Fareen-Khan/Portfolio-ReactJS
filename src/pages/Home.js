import React from "react";
import Spotify from "../components/Spotify";
import { motion } from "framer-motion";
import {
	textVariants,
	imageVariants,
} from "../animations/animations";

function Home() {
	return (
		<>
			<motion.div
				className="flex flex-col items-center justify-center h-screen overflow-hidden px-4"
				initial="hidden"
				animate="visible"
			>
				<div className="flex flex-row w-full h-full items-center">
					<motion.div
						className="flex flex-col justify-center items-center w-1/2"
						variants={textVariants}
					>
						<motion.h1
							className="text-secondary text-9xl mb-4"
							variants={textVariants}
						>
							Fareen Khan
						</motion.h1>
						<div className="flex space-x-4">
						</div>
						<Spotify />
					</motion.div>

					<motion.img
						className="w-1/2 h-full object-cover rounded-md"
						src="https://i.imgur.com/SBJHoNX.jpg"
						alt="Profile Picture"
						variants={imageVariants}
					/>
				</div>
			</motion.div>
		</>
	);
}

export default Home;
