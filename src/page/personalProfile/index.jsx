import React from "react";
import { Link } from "react-router-dom";
import Header from "../../component/homeComp/header";
import Footer from "../../component/homeComp/footer";
import Sidebar from "../../component/homeComp/sidebar";

function PersonalProfile() {
    return (
        <>
            <Header />
            <div className="flex gap-10 px-[150px] justify-center">
                <div className="hidden lg:flex bg-white rounded-lg my-10 shadow-sm rounded-[15px]">
                    <Sidebar />
                </div>
                <div className="w-full bg-white shadow-sm rounded-[15px] my-10 px-10 py-10">
                    <h1 className="font-bold">Personal Information</h1>
                    <p className="w-96 mt-10 text-gray-400 text-sm">We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                    <div className="flex flex-col gap-3">
                        <div className="w-full bg-white shadow-sm rounded-lg p-5 flex flex-col">
                            <label className="text-gray-400 text-sm">First Name</label>
                            <input type="text" name="FirstName" value="Robert" className="font-medium text-md" />
                        </div>
                        <div className="w-full bg-white shadow-sm rounded-lg p-5 flex flex-col">
                            <label className="text-gray-400 text-sm">Last Name</label>
                            <input type="text" name="FirstName" value="Chandler" className="font-medium text-md" />
                        </div>
                        <div className="w-full bg-white shadow-sm rounded-lg p-5 flex flex-col">
                            <label className="text-gray-400 text-sm">Verified E-mail</label>
                            <input type="email" name="FirstName" value="pewdiepie1@gmail.com" className="font-medium text-md" />
                        </div>
                        <div className="w-full bg-white shadow-sm rounded-lg p-5 flex flex-col">
                            <label className="text-gray-400 text-sm">Phone Number</label>
                            <div className="flex justify-between">
                                <input type="text" name="FirstName" value="+62 813-9387-7946" className="font-medium text-md" />
                                <Link to="#" className="text-primary text-xs">Manage</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default PersonalProfile