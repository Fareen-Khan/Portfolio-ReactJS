import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Card({ img, title, description, link }) {
  let iconImg;
  if (link == "") {
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
        <div class="flex flex-col max-w-sm h-full bg-dark border border-zinc-800 rounded-lg relative hover:scale-110 transition-all">
          <img
            class="rounded-t-lg"
            src={process.env.PUBLIC_URL + `/assets/projects/${img}`}
            alt=""
          />
          <div class="flex flex-col p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
          </div>
          <div className="absolute bottom-0 left-0 ml-2 mb-2">{iconImg}</div>
        </div>
      </Link>
    </>
  );
}

export default Card;
