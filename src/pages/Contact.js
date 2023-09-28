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
      className="flex flex-col justify-center items-center h-full overflow-y-hidden"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-secondary text-5xl">Contact Me</h1>
      <br />
      <div className="text-secondary text-xl font-light w-1/3 text-center space-y-4">
        <p>Reach me at any of these sites down below</p>
      </div>
      <br />
      <div className="flex space-x-5 scale-125">
        {socialIcons.map((item, index) => {
          console.log(item.name);
          return (
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
          );
        })}
      </div>
    </motion.div>
  );
}

export default Contact;
