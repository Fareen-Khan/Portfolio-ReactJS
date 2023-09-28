import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import IconList from "../components/IconList";

function About() {
  return (
    <motion.div
      className="flex flex-col h-full items-center px-4 overflow-y-auto overscroll-none pb-16 pt-4"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        className="aspect-square h-48 md:h-64 lg:h-96 w-48 md:w-64 lg:w-96 object-cover rounded-full"
        src={process.env.PUBLIC_URL + "/assets/DSC09432.png"}
        alt="Profile Image"
      />
      <h1 className="text-secondary text-3xl md:text-5xl mt-4">
        Fareen Khan
      </h1>
      <br />
      <div className="text-secondary text-base md:text-xl font-light w-full md:w-2/3 lg:w-1/2 text-left space-y-4">
        <p>
          Hey! I'm Fareen, a third-year software engineering student at Toronto
          Metropolitan University.
        </p>
        <p>
          I began coding in Python on a whim. I developed some simple algorithms
          and eventually created a web scraping bot on Discord. Since then, I've
          embarked on a journey to learn JavaScript, web development, and
          software development.
        </p>
        <p className="flex">
          Check out some of my&nbsp;
          <Link
            className="flex cursor-pointer hover:scale-110 transition-all"
            to={"/projects"}
          >
            {" "}
            projects!😁
          </Link>
        </p>
        <br />
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-5">
          <p className="text-secondary">Languages</p>
          <IconList dest="language" />
        </div>
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-5">
          <p className="text-secondary">Technologies</p>
          <IconList dest="technologies" />
        </div>
        <div className="flex flex-row space-x-2 md:space-x-5">
          <p className="text-secondary">Resume</p>
          <Link
            className="flex cursor-pointer hover:scale-110 transition-all underline"
            to="https://drive.google.com/file/d/1O1kLwYHNHVUg0fY29mlo8d5uT-sV9T0r/preview"
          >
            Click Here
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
