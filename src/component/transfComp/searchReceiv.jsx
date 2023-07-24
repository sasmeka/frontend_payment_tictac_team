import React from "react";
import { Link } from "react-router-dom";
import Cards from "../transfComp/cardsContact";
import image from "../../assets/img/Default_Profile.png"

function TransferReceiv() {
    return (
        <>
        <div>
            <h1 className="text-sm md:text-md font-bold">Search Receiver</h1>
            <input type="search" name="search" id="" placeholder="Search receiver here"  className="bg-gray-200 w-full rounded-[5px] p-2 text-xs placeholder:text-xs my-3"/>
            <div className="flex flex-col gap-3">
                <Cards
                    image={image}
                    name="Samuel Suhi"
                    telp="+62 813 8456 9876"
                />
                <Cards
                    image={image}
                    name="Momo Taro"
                    telp="+62 813 8456 9876"
                />
                <Cards
                    image={image}
                    name="Samuel Suhi"
                    telp="+62 813 8456 9876"
                />
                <Cards
                    image={image}
                    name="Samuel Suhi"
                    telp="+62 813 8456 9876"
                />
            </div>
        </div>
        </>
    )
}


export default TransferReceiv