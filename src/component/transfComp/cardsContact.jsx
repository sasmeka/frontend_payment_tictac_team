import React from "react";
import { Link } from "react-router-dom";

function Cards({ image, name, telp }) {
  function capitalName(text) {
    return text.replace(/\w\S*/g, function (word) {
      const newWord = word.slice(0, 1).toUpperCase() + word.substr(1);
      return newWord;
    });
  }
  return (
    <>
      <div className="flex bg-white rounded-lg items-center gap-4 w-full p-2 md:p-1 lg:p-3 shadow-md">
        <div className="w-[60px] rounded-lg">
          <img src={image} alt="" className="w-[60px] h-[60px] object-cover rounded-lg" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xs md:text-md text-left">{capitalName(name)}</h2>
          <p className="text-gray-400 text-[9px] text-left">{telp}</p>
        </div>
      </div>
    </>
  );
}


export default Cards