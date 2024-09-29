import React from "react";
import { Link } from "react-router-dom";
import { buttonVariants } from "../animations/animations"; // Import the button variants
import { motion } from "framer-motion"; // Import motion

function Navbar() {
	return (
		<div className="w-full flex m-auto pt-4 bg-primary" id="navbar">
			<div className="mx-4 flex justify-between items-end space-x-5 text-secondary">
				<Link
					className="flex cursor-pointer font-normal text-xl lg:text-2xl text-white hover:text-red-400 transition-all"
					to={"/"}
				>
					Fareen
				</Link>

				{/* Wrap the button links in a motion.div for staggered animation */}
				<motion.div
					className="flex space-x-5" // Use flexbox for spacing
					variants={buttonVariants} // Apply button variants
					initial="hidden"
					animate="visible"
				>
					<motion.div variants={buttonVariants}>
						<Link
							className="cursor-pointer hover:text-red-400 transition-all text-md lg:text-lg"
							to={"/about"}
						>
							About Me
						</Link>
					</motion.div>

					<motion.div variants={buttonVariants}>
						<Link
							className="cursor-pointer hover:text-red-400 transition-all text-md lg:text-lg"
							to={"/projects"}
						>
							Projects
						</Link>
					</motion.div>

					<motion.div variants={buttonVariants}>
						<Link
							className="cursor-pointer hover:text-red-400 transition-all text-md lg:text-lg"
							to={"/contact"}
						>
							Contact Me
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}

export default Navbar;
