import React from "react";
import Button from "../components/Button";
import Spotify from "../components/Spotify";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <motion.div
        className="flex flex-col justify-center items-center h-full overflow-y-hidden"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-secondary text-5xl">Fareen Khan</h1>
        <br />
        <div className="flex space-x-2">
          <Button name={"About Me"} dest={"/about"} />
          <Button name={"Projects"} dest={"/projects"} />
          <Button name={"Contact Me"} dest={"/contact"} />
        </div>
        <Spotify />
      </motion.div>
    </>
  );
}

export default Home;
