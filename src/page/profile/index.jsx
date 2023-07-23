import React from "react";
import { Link } from "react-router-dom";
import Header from "../../component/homeComp/header";
import Footer from "../../component/homeComp/footer";
import Sidebar from "../../component/homeComp/sidebar";
import imageProf from "../../assets/img/Default_Profile.png"

function Profile() {
    return (
        <>
        <Header />
        <div className="flex gap-10 p-2 md:px-[150px] justify-center">
            <div className="hidden lg:flex bg-white rounded-lg my-10 shadow-sm rounded-[15px]">
                <Sidebar />
            </div>
            <div className="w-full bg-white shadow-sm rounded-[15px] my-10 px-10 py-10 flex items-center flex-col">
                <div className="flex flex-col items-center gap-1">
                    <div className="flex w-[80px]">
                        <img src={imageProf} alt="" className="rounded-lg"/>
                        <button>

                        </button>
                    </div>
                    <h1 className="font-bold text-md">Robert Chandler</h1>
                    <h3 className="text-xs text-gray-400 ">+62 813 9387 7346</h3>
                </div>
                <div className="flex flex-col gap-3 my-5">
                    <div className="bg-gray-200 p-3 w-[350px] md:w-[400px] rounded-lg">
                        <Link to="#" className="flex justify-between items-center text-xs md:text-sm font-medium">
                            Personal Information
                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 11 20" fill="none">
                                    <path d="M1.00032 1.83365L9.16699 10.0003L1.00033 18.167" stroke="#7E7D84" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                        </Link>
                    </div>
                    <div className="bg-gray-200 p-3 w-[350px] md:w-[400px] rounded-lg">
                        <Link to="#" className="flex justify-between items-center text-xs md:text-sm font-medium">
                            Change Password
                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 11 20" fill="none">
                                    <path d="M1.00032 1.83365L9.16699 10.0003L1.00033 18.167" stroke="#7E7D84" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                        </Link>
                    </div>
                    <div className="bg-gray-200 p-3 w-[350px] md:w-[400px] rounded-lg">
                        <Link to="#" className="flex justify-between items-center text-xs md:text-sm font-medium">
                            Change PIN
                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 11 20" fill="none">
                                    <path d="M1.00032 1.83365L9.16699 10.0003L1.00033 18.167" stroke="#7E7D84" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                        </Link>
                    </div>
                    <div className="bg-gray-200 p-3 w-[350px] md:w-[400px] rounded-lg">
                        <Link to="#" className="flex justify-between items-center text-xs md:text-sm font-medium">
                            Logout
                        </Link>
                    </div>
                </div>


            </div>
        </div>
        <Footer />
        </>
    )
}


export default Profile