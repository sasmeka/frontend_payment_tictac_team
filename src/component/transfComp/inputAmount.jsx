import React from "react";
import { Link } from "react-router-dom";
import Cards from "../transfComp/cardsContact";
import image from "../../assets/img/Default_Profile.png"

function InputAmount() {
    return (
        <>
        <div className="relative">
            <h1 className="text-sm md:text-md font-bold">Transfer Money</h1>
            <div className="flex flex-col gap-3 mt-5 md:mt-10">
                <Cards
                    image={image}
                    name="Samuel Suhi"
                    telp="+62 813 8456 9876"
                />
            </div>
            <p className="text-xs mt-5 md:mt-10">
                Type the amount you want to transfer and then
                press continue to the next steps.
            </p>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center">
                    <input type="text" name="amount" placeholder="0.00" id="" className="flex text-[25px] placeholder:text-[25px] p-2 text-primary font-bold text-center"/>
                    <h5 className="font-bold text-[9px]">Rp.120.000 Available</h5>
                </div>
                <div className="flex gap-2 items-center border-b-[1px] border-b-primary py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <   path d="M17 3.0003C17.2626 2.73766 17.5744 2.52932 17.9176 2.38718C18.2608 2.24503 18.6286 2.17188 19 2.17188C19.3714 2.17187 19.7392 2.24503 20.0824 2.38718C20.4256 2.52932 20.7374 2.73766 21 3.0003C21.2626 3.26295 21.471 3.57475 21.6131 3.91791C21.7553 4.26107 21.8284 4.62887 21.8284 5.0003C21.8284 5.37174 21.7553 5.73953 21.6131 6.08269C21.471 6.42585 21.2626 6.73766 21 7.0003L7.5 20.5003L2 22.0003L3.5 16.5003L17 3.0003Z" stroke="#6379F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <input type="text" name="desc" id="" placeholder="Add some notes" className="text-xs palceholder:text-xs"/>
                </div>
            </div>
            <div className="flex justify-end">
                <button className="bg-primary w-[80px] p-2 text-white text-xs rounded-lg ">
                    Continue
                </button>
            </div>
        </div>
        </>
    )
}


export default InputAmount