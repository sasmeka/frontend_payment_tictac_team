import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../transfComp/cardsContact";

function StatusTransf({ name, image, phone, amount, notes, balance_left, date_select, status_transfer, transferFailed }) {
    const [transferStatus, setTransferStatus] = useState(status_transfer ? 'success' : "failed");
    return (
        <>
            <div className="relative m-10">
                <div className="w-full bg-white shadow-sm rounded-[15px] my-10 px-10 py-10">
                    <div className="flex flex-col items-center justify-center gap-3">
                        {transferStatus === "success" ? (
                            <svg
                                width="70"
                                height="70"
                                viewBox="0 0 70 70"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="35" cy="35" r="35" fill="#1EC15F" />
                                <path
                                    d="M49 24.5L29.75 43.75L21 35"
                                    stroke="white"
                                    stroke-width="4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        ) : (
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="35" cy="35" r="35" fill="#FF5B37" />
                                <path d="M45.5 24.5L24.5 45.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M24.5 24.5L45.5 45.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        )}
                        {transferStatus === "success" ? (
                            <h1 className="font-bold">Transfer Success</h1>
                        ) : (
                            <>
                                <h1 className="font-bold">Transfer Failed</h1>
                                <p className="text-xs text-gray-400 items-center text-center">
                                    We can’t transfer your money at the moment, we recommend you to
                                    check your internet connection and try again.
                                </p>
                            </>
                        )}

                    </div>
                    <div className="flex flex-col gap-3 mt-5">
                        <div className="w-full bg-white shadow-md rounded-lg p-5 flex flex-col">
                            <label className="text-gray-400 text-sm">Amount</label>
                            <h1 className="font-medium text-md">Rp. {amount}</h1>
                        </div>
                        <div className="w-full bg-white shadow-md rounded-lg p-5 flex flex-col">
                            <label className="text-gray-400 text-sm">Balance Left</label>
                            <h1 className="font-medium text-md">Rp. {balance_left}</h1>
                        </div>
                        <div className="w-full bg-white shadow-md rounded-lg p-5 flex flex-col">
                            <label className="text-gray-400 text-sm">Date & Time</label>
                            <h1 className="font-medium text-md">{date_select}</h1>
                        </div>
                        <div className="w-full bg-white shadow-md rounded-lg p-5 flex flex-col">
                            <label className="text-gray-400 text-sm">Notes</label>
                            <h1 className="font-medium text-md">{notes}</h1>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-400 text-sm font-bold">Transfer to</label>
                            <Cards
                                image={image}
                                name={name}
                                telp={phone}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-3">
                    {transferStatus === "success" ? (
                        <>
                            <button className="bg-indigo-50 w-[40px] p-2 text-white text-xs rounded-lg flex items-center gap-3 justify-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="#3A3D42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="#3A3D42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="#3A3D42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.58984 13.5098L15.4198 17.4898" stroke="#3A3D42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.4098 6.50977L8.58984 10.4898" stroke="#3A3D42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button className="bg-indigo-50 w-[150px] font-bold p-2 text-primary text-xs rounded-lg flex items-center gap-3 justify-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M19.25 13.75V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V13.75" stroke="#6379F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.41699 9.16699L11.0003 13.7503L15.5837 9.16699" stroke="#6379F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11 13.75V2.75" stroke="#6379F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Download PDF
                            </button>
                            <Link to='/home'> <button className="bg-primary w-[100px] p-2 text-white text-xs rounded-lg font-bold ">
                                Back to Home
                            </button></Link>
                        </>
                    ) : (
                        <button
                            className="bg-primary w-full lg:w-[100px] p-2 text-white text-xs rounded-lg font-bold"
                            onClick={transferFailed}
                        >
                            Try Again
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}


export default StatusTransf