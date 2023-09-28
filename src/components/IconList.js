import React from "react";

function importAll(r) {
  return r.keys().map(r);
}

function IconLanguageList() {
  const filenames = importAll(
    require.context(`../../public/assets/language`, false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <ul className="flex flex-row space-x-5">
      {filenames.map((filename) => {
        return (
          <li>
            <img className="aspect-square h-8 rounded hover:scale-110 transition-all" src={filename} alt={filename} />
          </li>
        );
      })}
    </ul>
  );
}

function IconTechList() {
  const filenames = importAll(
    require.context(`../../public/assets/technologies`, false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <ul className="flex flex-row space-x-5">
      {filenames.map((filename) => {
        return (
          <li>
            <img className="aspect-square h-8 rounded hover:scale-110 transition-all" src={filename} alt={filename} />
          </li>
        );
      })}
    </ul>
  );
}

function IconList({dest}){
  if (dest === "language"){
    return(IconLanguageList())
  }else{
    return(IconTechList())
  }
}


export default IconList;
