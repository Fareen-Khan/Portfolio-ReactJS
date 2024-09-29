import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faGithub,
  faLinkedin,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	textVariants,
	textLChildVariants,
  textRChildVariants,
  textDVariants,
} from "../animations/animations";

function Contact() {
  const socialIcons = [
    { icon: faGithub, link: "https://github.com/Fareen-Khan" },
    { icon: faLinkedin, link: "https://www.linkedin.com/in/fareenkhan/" },
    { icon: faEnvelope, link: "mailto:kfareen34@gmail.com" },
    { icon: faSpotify, link: "https://open.spotify.com/user/mcstar123" },
  ];

  return (
		<motion.div
			className="flex flex-col justify-center items-center h-full overflow-y-auto p-4 md:p-8 lg:p-12"
			initial="hidden"
			animate="visible"
			transition={{ duration: 0.5 }}
		>
			{/* Animate the heading */}
			<motion.h1
				className="text-secondary text-3xl md:text-5xl"
				variants={textVariants}
			>
				Contact Me
			</motion.h1>
			<br />

			{/* Animate the paragraph */}
			<motion.div
				className="text-secondary text-lg md:text-xl font-light w-full md:w-2/3 lg:w-1/2 text-center space-y-4"
				variants={textVariants}
			>
				<p>Reach me at any of these sites down below</p>
			</motion.div>
			<br />

			{/* Animate social icons */}
			<div className="flex justify-center space-x-5 scale-100 md:scale-125">
				{socialIcons.map((item, index) => (
					<motion.div
						key={index}
						// Stagger left-to-right animations based on index
						variants={
							index === 0
								? textLChildVariants // First icon comes from the left
								: index === socialIcons.length - 1
								? textRChildVariants // Last icon comes from the right
								: textDVariants // Middle icons come from above
						}
						initial="hidden"
						animate="visible"
					>
						<Link to={item.link}>
							<FontAwesomeIcon
                className="hover:scale-110 transition-all"
								icon={item.icon}
								size="2xl"
								style={{ color: "#ffffff" }}
							/>
						</Link>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
}

export default Contact;
