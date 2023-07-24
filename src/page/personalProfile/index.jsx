import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../component/homeComp/header";
import Footer from "../../component/homeComp/footer";
import Sidebar from "../../component/homeComp/sidebar";

function PersonalProfile() {

    const { data } = useSelector((s) => s.user)
    const navigates = useNavigate();

    return (
        <>
            <Header />
            <div className='bg-gray-200'>
                <div className="p-5 bg-gray-200 max-w-7xl mx-auto">
                    <div className="lg:grid flex flex-col grid-rows-4 grid-flow-col gap-4">
                        <div className="hidden lg:grid row-span-4 grid-rows-4 w-full bg-white auto-cols-min rounded-lg">
                            <Sidebar />
                        </div>
                        <div className="row-span-4 col-span-9 bg-white shadow-md rounded-[15px] px-10 pt-16 pb-10 flex items-start flex-col">
                            <h1 className="font-bold">Personal Information</h1>
                            <p className="w-96 mt-10 text-gray-400 text-sm">We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                            <div className="flex flex-col gap-3 w-full mt-5">
                                <div className="w-full bg-white shadow-md rounded-lg p-5 flex flex-col mb-5">
                                    <label className="text-gray-400 text-sm">First Name</label>
                                    <h1 className="font-medium text-md">{data[0] ? data[0].first_name : ''}</h1>
                                </div>
                                <div className="w-full bg-white shadow-md rounded-lg p-5 flex flex-col mb-5">
                                    <label className="text-gray-400 text-sm">Last Name</label>
                                    <h1 className="font-medium text-md">{data[0] ? data[0].last_name : ''}</h1>
                                </div>
                                <div className="w-full bg-white shadow-md rounded-lg p-5 flex flex-col mb-5">
                                    <label className="text-gray-400 text-sm">Verified E-mail</label>
                                    <h1 className="font-medium text-md">{data[0] ? data[0].email : ''}</h1>
                                </div>
                                <div className="w-full bg-white shadow-md rounded-lg p-5 flex flex-col mb-5">
                                    <label className="text-gray-400 text-sm">Phone Number</label>
                                    <div className="flex justify-between">
                                        <h1 className="font-medium text-md">{data[0] ? data[0].phone : ''}</h1>
                                        <button className="text-primary text-xs" onClick={() => navigates('/manage_phone')}>Manage</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>
            <Footer />
        </>
    )
}


export default PersonalProfile