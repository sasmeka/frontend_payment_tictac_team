import React, { useEffect, useState, useContext } from 'react'
import cover_login from '../../assets/img/cover_login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import useApi from '../../helper/useApi'

import { logout } from '../../store/reducer/user'
import { useDispatch } from "react-redux";

import SuccessContext from "../../helper/context_success";
import ErrorContext from "../../helper/context_error";
function Reset_password() {
    const api = useApi()
    const dispatch = useDispatch()
    const { search } = useLocation();
    const navigate = useNavigate();
    const query = React.useMemo(() => new URLSearchParams(search), [search]);
    const [new_password, setnew_password] = useState('')
    const [confirm_new_password, setconfirm_new_password] = useState('')
    const [email, setemail] = useState('')

    const { error_message, seterror_message } = useContext(ErrorContext);
    const { success_message, setsuccess_message } = useContext(SuccessContext);

    const btnchange_password = async (e) => {
        e.preventDefault()
        try {
            if (confirm_new_password != new_password || new_password == '' || confirm_new_password == '') {
                seterror_message('new password confirmation does not match')
            } else {
                const { data } = await api({
                    method: 'post',
                    url: 'change_forget_password?token=' + query.get('token'),
                    data: {
                        "pass": new_password
                    }
                })
                setsuccess_message(data.message)
                navigate(`/sign-in`)
            }
        } catch (error) {
            seterror_message(error.response.data.message)
        }
    }

    const [cpass1, setcpass1] = useState(true)
    const click_pass1 = (e) => {
        e.preventDefault()
        setcpass1(cpass1 == true ? false : true)
    }
    const [cpass2, setcpass2] = useState(true)
    const click_pass2 = (e) => {
        e.preventDefault()
        setcpass2(cpass2 == true ? false : true)
    }

    useEffect(() => {
        document.title = 'Change Password';
        dispatch(logout())
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
                    <form onSubmit={btnchange_password}>
                        <h1 className="text-2xl md:text-3xl font-bold my-2 mt-10">Did You Forgot Your Password? Don’t Worry, You Can Reset Your assword In a Minutes.</h1>
                        <p className="text-[#AAAAAA] text-md md:text-lg tracking-wide mb-8 mt-10">To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
                        <div className="flex flex-col mb-10">
                            <div className="relative w-full items-center">
                                <i className={(error_message != '' ? 'text-red-400' : new_password == '' ? 'text-[#A0A3BD]' : 'text-[#6379F4]') + " fa fa-lock absolute top-4 md:top-[1.1rem] left-3"} aria-hidden="true"></i>
                                <input type={cpass1 ? "password" : "text"} onChange={(e) => setnew_password(e.target.value)} className={(error_message != '' ? 'border-red-400' : new_password == '' ? 'border-opacity-50 border-[#A9A9A9]' : 'border-[#6379F4]') + " focus:outline-none h-12 md:h-14 w-full border-b-[3px] pl-10 placeholder:text-[#A0A3BD] placeholder:tracking-wider"} placeholder="New password" />
                                <Link onClick={click_pass1}><i className="fa fa-eye absolute top-4 md:top-[1.1rem] right-3 text-[#A0A3BD]" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10">
                            <div className="relative w-full items-center">
                                <i className={(error_message != '' ? 'text-red-400' : confirm_new_password == '' ? 'text-[#A0A3BD]' : 'text-[#6379F4]') + " fa fa-lock absolute top-4 md:top-[1.1rem] left-3"} aria-hidden="true"></i>
                                <input type={cpass2 ? "password" : "text"} onChange={(e) => setconfirm_new_password(e.target.value)} className={(error_message != '' ? 'border-red-400' : confirm_new_password == '' ? 'border-opacity-50 border-[#A9A9A9]' : 'border-[#6379F4]') + " focus:outline-none h-12 md:h-14 w-full border-b-[3px] pl-10 placeholder:text-[#A0A3BD] placeholder:tracking-wider"} placeholder="Confirm new password" />
                                <Link onClick={click_pass2}><i className="fa fa-eye absolute top-4 md:top-[1.1rem] right-3 text-[#A0A3BD]" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                        {
                            error_message != '' ? (
                                <div className="text-red-400 text-center tracking-wide mb-3 text-sm">{error_message}</div>
                            ) : ''
                        }
                        {
                            success_message != '' ? (
                                <div className="text-green-600 text-center tracking-wide mb-3 text-sm">{success_message}</div>
                            ) : ''
                        }
                        <button type="submit" className={(new_password != '' && confirm_new_password != '' ? 'bg-[#6379F4]' : 'bg-[#e7e7e7]') + " mt-10 h-12 md:h-14 w-full rounded-2xl text-black font-semibold tracking-wider text-white font-semibold tracking-wider"}>Reset password</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Reset_password