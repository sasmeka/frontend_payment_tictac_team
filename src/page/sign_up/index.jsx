import React, { useEffect, useState, useContext } from 'react'
import cover_login from '../../assets/img/cover_login.png'

import { Link, useNavigate } from 'react-router-dom'
import useApi from '../../helper/useApi'

import SuccessContext from "../../helper/context_success";
import ErrorContext from "../../helper/context_error";

function Sign_up() {
    const api = useApi()
    const navigate = useNavigate();
    const [username, setusername] = useState('')
    const [first, setfirst] = useState('')
    const [last, setlast] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpass, setcpass] = useState(true)

    const { error_message, seterror_message } = useContext(ErrorContext);
    const { success_message, setsuccess_message } = useContext(SuccessContext);

    const Register = async (e) => {
        e.preventDefault()
        try {
            if (username == '' || first == '' || last == '' || email == '' || password == '') {
                seterror_message('all forms must be filled')
            } else {
                const { data } = await api({
                    method: 'post', url: 'register', data: {
                        "username": username,
                        "first_name": first,
                        "last_name": last,
                        "email": email,
                        "pass": password
                    }
                })
                setsuccess_message(data.message)
                navigate('/sign-in');
            }
        } catch (error) {
            seterror_message(error.response.data.message)
        }
    }
    const click_pass = () => {
        setcpass(cpass == true ? false : true)
    }
    useEffect(() => {
        document.title = 'Sign Up';
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
                <div className="md:col-span-2 flex flex-col mt-20 mx-10">
                    <form onSubmit={Register}>
                        <h1 className="text-2xl md:text-3xl font-bold my-2">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h1>
                        <p className="text-[#AAAAAA] text-md md:text-lg tracking-wide mb-8">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                        <div className="flex flex-col mb-5">
                            <input type="text" onChange={(e) => setusername(e.target.value)} className="h-12 md:h-14 w-full border-b-4 pl-3 placeholder:text-[#A0A3BD] placeholder:tracking-wider" placeholder="Enter your username" />
                        </div>
                        <div className="flex flex-col mb-5">
                            <input type="text" onChange={(e) => setfirst(e.target.value)} className="h-12 md:h-14 w-full border-b-4 pl-3 placeholder:text-[#A0A3BD] placeholder:tracking-wider" placeholder="Enter your first name" />
                        </div>
                        <div className="flex flex-col mb-5">
                            <input type="text" onChange={(e) => setlast(e.target.value)} className="h-12 md:h-14 w-full border-b-4 pl-3 placeholder:text-[#A0A3BD] placeholder:tracking-wider" placeholder="Enter your last name" />
                        </div>
                        <div className="flex flex-col mb-5">
                            <input type="text" onChange={(e) => setemail(e.target.value)} className="h-12 md:h-14 w-full border-b-4 pl-3 placeholder:text-[#A0A3BD] placeholder:tracking-wider" placeholder="Enter your e-mail" />
                        </div>
                        <div className="flex flex-col mb-5">
                            <div className="relative w-full items-center">
                                <input type={cpass ? "password" : "text"} onChange={(e) => setpassword(e.target.value)} className="h-12 md:h-14 w-full border-b-4 pl-3 placeholder:text-[#A0A3BD] placeholder:tracking-wider" placeholder="Enter your password" />
                                <Link onClick={click_pass}><i className="fa fa-eye absolute top-3 md:top-[1rem] right-3 text-[#A0A3BD]" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                        {
                            error_message != '' ? (
                                <div className="text-red-600 tracking-wide mb-3 text-sm">{error_message}</div>
                            ) : ''
                        }
                        <button type="submit" className="mt-5 h-12 md:h-14 w-full bg-[#e7e7e7] rounded-2xl text-black font-semibold tracking-wider text-white font-semibold tracking-wider" >Sign up</button>
                        <p className="text-center text-[#8692A6] tracking-wide text-sm md:text-md">
                            Already have an account? Let’s<Link to="/sign-in" className="text-[#5F2EEA] underline underline-offset-4 font-semibold">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Sign_up