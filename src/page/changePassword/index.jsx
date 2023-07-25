import React, { useEffect, useState, useContext } from 'react'
import Header from '../../component/homeComp/header'
import Footer from '../../component/homeComp/footer'
import Sidebar from '../../component/homeComp/sidebar'

import authChecked from '../../helper/authCheck'
import ErrorContext from '../../helper/context_error'
import SuccessContext from '../../helper/context_success'

import { Link, useNavigate } from 'react-router-dom'

import useApi from '../../helper/useApi'

import { login, addrefresh_token, logout } from '../../store/reducer/user'
import { useDispatch } from "react-redux";

function changePassword() {
    const api = useApi()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { error_message, seterror_message } = useContext(ErrorContext);
    const { success_message, setsuccess_message } = useContext(SuccessContext);

    const [pass, setPass] = useState('')
    const [newPass, setNewpass] = useState('')
    const [passtrans, setpasstrans] = useState('')

    const [cpass1, setcpass1] = useState(true)
    const click_pass1 = () => {
        setcpass1(cpass1 == true ? false : true)
    }
    const [cpass2, setcpass2] = useState(true)
    const click_pass2 = () => {
        setcpass2(cpass2 == true ? false : true)
    }
    const [cpass3, setcpass3] = useState(true)
    const click_pass3 = () => {
        setcpass3(cpass3 == true ? false : true)
    }

    const updatePassword = async () => {
        try {
            const { data } = await api({
                method: 'PUT',
                url: 'user/change_password',
                data: {
                    "pass": pass,
                    "new_pass": newPass
                }
            })
            setsuccess_message(data.message)
            seterror_message('')
            dispatch(logout())
            navigate('/sign-in')
        } catch (e) {
            seterror_message(e.response.data.error)
            setsuccess_message('')
        }
    }

    const btnudpate = () => {
        if (pass == '' || newPass == '' || passtrans == '') {
            seterror_message('form error')
        } else {
            if (newPass != passtrans) {
                seterror_message('confirm password not match.')
            } else {
                updatePassword()
            }
        }
    }
    useEffect(() => {
        document.title = 'Change Password';
    }, []);
    useEffect(() => {
        setTimeout(() => {
            seterror_message('')
            setsuccess_message('')
        }, 10000)
    }, [error_message, success_message]);

    return (
        <>
            <Header />
            <div className='bg-gray-200'>
                <div className="p-5 bg-gray-200 max-w-7xl mx-auto">
                    <div className="lg:grid flex flex-col grid-rows-4 grid-flow-col gap-4">
                        <div className="hidden lg:grid row-span-4 grid-rows-4 w-full bg-white auto-cols-min rounded-lg">
                            <Sidebar />
                        </div>
                        <div class="max-h-7xl row-span-4 col-span-10 bg-white rounded-lg overflow-auto">
                            <div className='flex flex-col gap-y-10 justify-between md:text-start text-center p-10 mt-5'>
                                <h1 className='text-lg font-bold'>Change Password</h1>
                                <p className='text-sm text-gray-400 tracking-wider'>
                                    You must enter your current password and <br />then type your new password twice.
                                </p>
                            </div>
                            <div className=''>
                                <div className="flex flex-col mb-10">
                                    <div className="relative w-96 items-center mx-auto">
                                        <i className={(error_message != '' ? 'text-red-400' : pass == '' ? 'text-[#A0A3BD]' : 'text-[#6379F4]') + " fa fa-lock absolute top-4 md:top-[1.1rem] left-3"} aria-hidden="true"></i>
                                        <input type={cpass1 ? "password" : "text"} onChange={(e) => setPass(e.target.value)} className={(error_message != '' ? 'border-red-400' : pass == '' ? 'border-opacity-50 border-[#A9A9A9]' : 'border-[#6379F4]') + " focus:outline-none h-12 md:h-14 w-full border-b-[3px] pl-10 placeholder:text-[#A0A3BD] placeholder:tracking-wider"} placeholder="Enter your old password" />
                                        <Link onClick={click_pass1}><i className="fa fa-eye absolute top-4 md:top-[1.1rem] right-3 text-[#A0A3BD]" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                                <div className="flex flex-col mb-10">
                                    <div className="relative w-96 items-center mx-auto">
                                        <i className={(error_message != '' ? 'text-red-400' : passtrans == '' ? 'text-[#A0A3BD]' : 'text-[#6379F4]') + " fa fa-lock absolute top-4 md:top-[1.1rem] left-3"} aria-hidden="true"></i>
                                        <input type={cpass2 ? "password" : "text"} onChange={(e) => setpasstrans(e.target.value)} className={(error_message != '' ? 'border-red-400' : passtrans === '' ? 'border-opacity-50 border-[#A9A9A9]' : 'border-[#6379F4]') + " focus:outline-none h-12 md:h-14 w-full border-b-[3px] pl-10 placeholder:text-[#A0A3BD] placeholder:tracking-wider"} placeholder="Enter your new password" />
                                        <Link onClick={click_pass2}><i className="fa fa-eye absolute top-4 md:top-[1.1rem] right-3 text-[#A0A3BD]" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                                <div className="flex flex-col mb-10">
                                    <div className="relative w-96 items-center mx-auto">
                                        <i className={(error_message != '' ? 'text-red-400' : newPass == '' ? 'text-[#A0A3BD]' : 'text-[#6379F4]') + " fa fa-lock absolute top-4 md:top-[1.1rem] left-3"} aria-hidden="true"></i>
                                        <input type={cpass3 ? "password" : "text"} onChange={(e) => setNewpass(e.target.value)} className={(error_message !== '' ? 'border-red-400' : newPass === '' ? 'border-opacity-50 border-[#A9A9A9]' : 'border-[#6379F4]') + " focus:outline-none h-12 md:h-14 w-full border-b-[3px] pl-10 placeholder:text-[#A0A3BD] placeholder:tracking-wider"} placeholder="Enter your confirm new password" />
                                        <Link onClick={click_pass3}><i className="fa fa-eye absolute top-4 md:top-[1.1rem] right-3 text-[#A0A3BD]" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                                {
                                    error_message != '' ? (
                                        <div className="text-red-400 text-center tracking-wide mb-3 text-sm">{error_message}</div>
                                    ) : ''
                                }
                                <div className='mx-auto flex justify-center '>
                                    <button onClick={btnudpate} className={(pass !== '' && newPass != '' && passtrans !== '' ? 'bg-primary' : 'bg-gray-600') + " mt-10 h-12 md:h-14 w-96 rounded-2xl text-black font-semibold tracking-wider text-white font-semibold tracking-wider"}>Change Password</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default authChecked(true, changePassword, ['user'])