import React, { useEffect, useState, useContext } from 'react'
import cover_login from '../../assets/img/cover_login.png'

import { Link, useNavigate } from 'react-router-dom'

import useApi from '../../helper/useApi'

import { login, addrefresh_token, logout } from '../../store/reducer/user'
import { useDispatch } from "react-redux";

import SuccessContext from "../../helper/context_success";
import ErrorContext from "../../helper/context_error";

function Sign_in() {
    const api = useApi()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const { error_message, seterror_message } = useContext(ErrorContext);
    const { success_message, setsuccess_message } = useContext(SuccessContext);

    const Login = async (e) => {
        e.preventDefault()
        try {
            const { data } = await api({
                method: 'post',
                url: 'login',
                data: {
                    "email": email,
                    "pass": password
                }
            })
            dispatch(login(data.Token))
            dispatch(addrefresh_token(data.Refresh_Token))
            navigate('/home');
        } catch (error) {
            setsuccess_message('')
            seterror_message(error.response.data.message)
        }
    }
    const [cpass, setcpass] = useState(true)
    const click_pass = () => {
        setcpass(cpass == true ? false : true)
    }

    useEffect(() => {
        document.title = 'Sign In';
        dispatch(logout())
    }, []);

    useEffect(() => {
        setTimeout(() => {
            seterror_message('')
            setsuccess_message('')
        }, 15000)
    }, [error_message, success_message]);
    return (
        <>
            <div className="grid md:grid-cols-5 grid-rows-1">
                <div className="hidden md:block md:col-span-3 md:relative">
                    <img className="h-full w-full object-cover" src={cover_login} alt="" />
                </div>
                <div className="md:col-span-2 flex flex-col mt-20 mx-10">
                    <form onSubmit={Login}>
                        <h1 className="text-2xl md:text-3xl font-bold my-2">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h1>
                        <p className="text-[#AAAAAA] text-md md:text-lg tracking-wide mb-8">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                        <div className="flex flex-col mb-10">
                            <div className="relative w-full items-center">
                                <i className={(error_message != '' ? 'text-red-400' : email == '' ? 'text-[#A0A3BD]' : 'text-[#6379F4]') + " fa fa-envelope-o absolute top-4 md:top-[1.1rem] left-3"} aria-hidden="true"></i>
                                <input type="text" onChange={(e) => setemail(e.target.value)} className={(error_message != '' ? 'border-red-400' : email == '' ? 'border-opacity-50 border-[#A9A9A9]' : 'border-[#6379F4]') + " focus:outline-none h-12 md:h-14 w-full border-b-[3px] pl-10 placeholder:text-[#A0A3BD] placeholder:tracking-wider"} placeholder="Enter your e-mail" />
                            </div>
                        </div>
                        <div className="flex flex-col mb-10">
                            <div className="relative w-full items-center">
                                <i className={(error_message != '' ? 'text-red-400' : password == '' ? 'text-[#A0A3BD]' : 'text-[#6379F4]') + " fa fa-lock absolute top-4 md:top-[1.1rem] left-3"} aria-hidden="true"></i>
                                <input type={cpass ? "password" : "text"} onChange={(e) => setpassword(e.target.value)} className={(error_message != '' ? 'border-red-400' : password == '' ? 'border-opacity-50 border-[#A9A9A9]' : 'border-[#6379F4]') + " focus:outline-none h-12 md:h-14 w-full border-b-[3px] pl-10 placeholder:text-[#A0A3BD] placeholder:tracking-wider"} placeholder="Enter your password" />
                                <Link onClick={click_pass}><i className="fa fa-eye absolute top-4 md:top-[1.1rem] right-3 text-[#A0A3BD]" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                        <p className="text-right text-[#8692A6] tracking-wide text-sm md:text-md my-4">
                            <Link to="/reset-password" className="text-[#8692A6] underline underline-offset-4 font-semibold">Forgot password?</Link>
                        </p>
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
                        <button type="submit" className={(email != '' && password != '' ? 'bg-[#6379F4]' : 'bg-[#e7e7e7]') + " mt-10 h-12 md:h-14 w-full rounded-2xl text-black font-semibold tracking-wider text-white font-semibold tracking-wider"}>Sign In</button>
                        <p className="text-center text-[#8692A6] tracking-wide text-sm mt-10 md:text-md">
                            Don't have an account? Let's <Link to="/sign-up" className="text-[#5F2EEA] decoration-none font-semibold">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Sign_in