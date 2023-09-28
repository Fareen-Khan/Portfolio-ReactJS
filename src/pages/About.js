import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import IconList from "../components/IconList";

function About() {
  return (
    <>
      <motion.div
        className="flex flex-col justify-center items-center h-full overflow-y-hidden"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          className="aspect-square h-2/5 object-cover rounded-full"
          src={process.env.PUBLIC_URL + "/assets/DSC09432.png"}
          alt="Profile Image"
        />
        <h1 className="text-secondary text-5xl">Fareen Khan</h1>
        <br />
        <div className="text-secondary text-xl font-light w-1/3 text-left space-y-4">
          <p>
            Hey! My name's Fareen a third year software engineering student at
            Toronto Metropolitan University.
          </p>
          <p>
            I started to code in Python on whim. I develeoped some simple
            algorithms and eventually made a web scraping bot on Discord. I have
            since decided to learn Javascript, web development and software
            development.
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
          <div className="flex flex-row space-x-5 ">
            <p className="text-secondary">Languages</p>
            <IconList dest="language" />
          </div>
          <div className="flex flex-row space-x-5 ">
            <p className="text-secondary">Technologies</p>
            <IconList dest="technologies" />
          </div>
          <div className="flex flex-row space-x-5 ">
            <p className="text-secondary">Resume</p>
            <Link
              className="flex cursor-pointer hover:scale-110 transition-all underline"
              to="https://drive.google.com/file/d/1Y7DWP26OkG4NP1X2LfTVxpAOQd_Zviox/preview"
            >
              Click Here
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default About;
