import React, { useEffect, useState, useContext } from 'react'
import cover_login from '../../assets/img/cover_login.png'
import { Link, useNavigate } from 'react-router-dom'

import useApi from '../../helper/useApi'

import SuccessContext from "../../helper/context_success";
import ErrorContext from "../../helper/context_error";
function Reset_password() {
    const api = useApi()
    const navigate = useNavigate();

    const [email, setemail] = useState('')

    const { error_message, seterror_message } = useContext(ErrorContext);
    const { success_message, setsuccess_message } = useContext(SuccessContext);

    const send_email = async (e) => {
        e.preventDefault()
        try {
            const { data } = await api({
                method: 'post',
                url: 'reset_password',
                data: {
                    "email": email
                }
            })
            setsuccess_message(data.message)
        } catch (error) {
            seterror_message(error.response.data.message)
        }
    }

    useEffect(() => {
        document.title = 'Reset Password';
    }, []);

    useEffect(() => {
        setTimeout(() => {
            seterror_message('')
            setsuccess_message('')
        }, 7000)
    }, [error_message, success_message]);
    return (
        <>
            <div className="grid md:grid-cols-5 grid-rows-1">
                <div className="hidden md:block md:col-span-3 md:relative">
                    <img className="h-full w-full object-cover" src={cover_login} alt="" />
                </div>
                <div className="md:col-span-2 flex flex-col mx-10 justify-center items-center">
                    <form onSubmit={send_email}>
                        <h1 className="text-2xl md:text-3xl font-bold my-2 mt-10">Did You Forgot Your Password? Don’t Worry, You Can Reset Your assword In a Minutes.</h1>
                        <p className="text-[#AAAAAA] text-md md:text-lg tracking-wide mb-8 mt-10">To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
                        <div className="flex flex-col mb-5">
                            <div className="relative w-full items-center">
                                <i className={(error_message != '' ? 'text-red-400' : email == '' ? 'text-[#A0A3BD]' : 'text-[#6379F4]') + " fa fa-envelope-o absolute top-4 md:top-[1.1rem] left-3"} aria-hidden="true"></i>
                                <input type="text" onChange={(e) => setemail(e.target.value)} className={(error_message != '' ? 'border-red-400' : email == '' ? 'border-opacity-50 border-[#A9A9A9]' : 'border-[#6379F4]') + " focus:outline-none h-12 md:h-14 w-full border-b-[3px] pl-10 placeholder:text-[#A0A3BD] placeholder:tracking-wider"} placeholder="Enter your e-mail" />
                            </div>
                        </div>
                        {
                            error_message != '' ? (
                                <div className="text-red-400 tracking-wide mb-3 text-sm">{error_message}</div>
                            ) : ''
                        }
                        {
                            success_message != '' ? (
                                <div className="text-green-600 tracking-wide mb-3 text-sm">{success_message}</div>
                            ) : ''
                        }
                        <button type="submit" className={(email != '' ? 'bg-[#6379F4]' : 'bg-[#e7e7e7]') + " mt-10 h-12 md:h-14 w-full rounded-2xl text-black font-semibold tracking-wider text-white font-semibold tracking-wider"}>Confirm</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Reset_password