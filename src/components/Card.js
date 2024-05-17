import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Card({ img, title, description, link }) {
  let iconImg;
  if (link === "") {
    iconImg = <></>;
  } else {
    iconImg = (
      <FontAwesomeIcon
        icon={faGithub}
        size="2xl"
        style={{ color: "#ffffff" }}
      />
    );
  }
  return (
    <>
      <Link to={link}>
        <div class="flex flex-col max-w-xs h-full bg-dark border border-zinc-800 rounded-lg relative hover:scale-110 transition-all">
          <img
            class="rounded-t-lg h-1/2 object-cover object-top"
            src={process.env.PUBLIC_URL + `/assets/projects/${img}`}
            alt=""
          />
          <div class="flex flex-col p-5">
            <h5 class="h-16 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p class="line-clamp-3 mb-3 font-normal text-gray-700 dark:text-gray-400 hover:line-clamp-none">
              {description}
            </p>
          </div>
          <div className="absolute bottom-0 left-0 ml-5 mb-5 hidden lg:flex">{iconImg}</div>
        </div>
      </Link>
    </>
  );
}

export default Card;
