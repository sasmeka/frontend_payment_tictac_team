import React from "react";
import { Link } from "react-router-dom";

function Cards({image, name, telp}) {
    return (
        <>
          <div className="flex bg-white rounded-lg items-center gap-4 w-full p-2 md:p-1 lg:p-3 shadow-sm">
                <figure className="w-[60px] rounded-lg">
                <img src={image} alt=""  className="rounded-lg"/>
                </figure>
                <div className="flex flex-col items-center text-center gap-2">
                    <h2 className="font-bold text-xs md:text-md">{name}</h2>
                    <p className="text-gray-400 text-[9px]">{telp}</p>
                </div>
          </div>
        </>
      );
    }


export default Cards