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
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-secondary text-3xl md:text-5xl">Contact Me</h1>
      <br />
      <div className="text-secondary text-lg md:text-xl font-light w-full md:w-2/3 lg:w-1/2 text-center space-y-4">
        <p>Reach me at any of these sites down below</p>
      </div>
      <br />
      <div className="flex justify-center space-x-5 scale-100 md:scale-125">
        {socialIcons.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="hover:scale-110 transition-all"
          >
            <FontAwesomeIcon
              icon={item.icon}
              size="2xl"
              style={{ color: "#ffffff" }}
            />
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default Contact;
