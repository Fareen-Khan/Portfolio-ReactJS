import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className="w-full flex m-auto pt-4 bg-primary">
        <div className="mx-4 flex justify-between items-end space-x-5 text-secondary">
          <Link className="flex cursor-pointer font-normal text-xl text-white" to={"/"}>Fareen</Link>
          <Link className="cursor-pointer hover:scale-110 transition-all" to={"/about"}>About Me</Link>
          <Link className="cursor-pointer hover:scale-110 transition-all" to={"/projects"}>Projects</Link>
          <Link className="cursor-pointer hover:scale-110 transition-all" to={"/contact"}>Contact Me</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
