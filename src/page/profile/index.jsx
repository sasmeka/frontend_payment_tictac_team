import React from "react";
import Header from "../../component/homeComp/header";
import Footer from "../../component/homeComp/footer";
import Sidebar from "../../component/homeComp/sidebar";
import imageProf from "../../assets/img/Default_Profile.png"

import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../store/reducer/user'
import { useDispatch } from "react-redux";

function Profile() {
    const navigates = useNavigate();
    const dispatch = useDispatch()

    const btnlogout = () => {
        dispatch(logout())
        navigates(`/sign-in`)
    }
    return (
        <>
            <Header />
            <div className='bg-gray-200'>
                <div className="p-5 bg-gray-200 max-w-7xl mx-auto">
                    <div className="lg:grid flex flex-col grid-rows-4 grid-flow-col gap-4">
                        <div className="hidden lg:flex row-span-4 auto-cols-min bg-white rounded-lg">
                            <Sidebar />
                        </div>
                        <div className="row-span-4 col-span-9 bg-white shadow-sm rounded-[15px] px-10 pt-32 pb-10 flex items-center flex-col">
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex w-[80px] my-5">
                                    <img src={imageProf} alt="" className="rounded-lg" />
                                    <button>

                                    </button>
                                </div>
                                <h1 className="font-bold text-md">Robert Chandler</h1>
                                <h3 className="text-xs text-gray-400 ">+62 813 9387 7346</h3>
                            </div>
                            <div className="flex flex-col gap-3 my-5 w-full items-center">
                                <button className="bg-gray-200 p-3 h-10 md:h-16 w-8/12 rounded-lg my-2">
                                    <Link to="/personal-info" className="flex justify-between items-center text-xs md:text-sm font-medium pl-5">
                                        Personal Information
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 11 20" fill="none">
                                            <path d="M1.00032 1.83365L9.16699 10.0003L1.00033 18.167" stroke="#7E7D84" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Link>
                                </button>
                                <button className="bg-gray-200 p-3 h-10 md:h-16 w-8/12 rounded-lg my-2">
                                    <Link to="/change-password" className="flex justify-between items-center text-xs md:text-sm font-medium pl-5">
                                        Change Password
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 11 20" fill="none">
                                            <path d="M1.00032 1.83365L9.16699 10.0003L1.00033 18.167" stroke="#7E7D84" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Link>
                                </button>
                                <button className="bg-gray-200 p-3 h-10 md:h-16 w-8/12 rounded-lg my-2">
                                    <Link to="/change-pin" className="flex justify-between items-center text-xs md:text-sm font-medium pl-5">
                                        Change PIN
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 11 20" fill="none">
                                            <path d="M1.00032 1.83365L9.16699 10.0003L1.00033 18.167" stroke="#7E7D84" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Link>
                                </button>
                                <button className="bg-gray-200 p-3 h-10 md:h-16 w-8/12 rounded-lg my-2">
                                    <Link onClick={btnlogout} className="flex justify-between items-center text-xs md:text-sm font-medium pl-5">
                                        Logout
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Profile