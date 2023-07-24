import React, { useEffect, useState, useContext } from 'react'
import cover_login from '../../assets/img/cover_login.png'
import { useNavigate } from 'react-router-dom'
import useApi from '../../helper/useApi'
import { logout } from '../../store/reducer/user'
import { useDispatch } from "react-redux";

import SuccessContext from "../../helper/context_success";
import ErrorContext from "../../helper/context_error";

function Create_otp() {
    const navigates = useNavigate()
    const api = useApi()
    const dispatch = useDispatch()

    const [otp, setOtp] = React.useState(new Array(6).fill(""));
    const { error_message, seterror_message } = useContext(ErrorContext);
    const { success_message, setsuccess_message } = useContext(SuccessContext);

    //input value get
    const handleChange = (el, index) => {
        if (isNaN(el.value)) return false

        setOtp([...otp.map((data, i) => (i === index ? el.value : data))])

        if (el.nextSibling) {
            el.nextSibling.focus()
        }
    }

    const changePIN = async () => {
        try {
            await api({
                method: 'put',
                url: 'user/change_pin',
                data: {
                    pin: otp.join("")
                }
            })
            dispatch(logout())
            setsuccess_message('success-create-otp')
        } catch (error) {
            seterror_message(error.response.data.message)
        }
    }

    //onClick event
    const submintOtp = () => {
        if (otp.join("").length === 6) {
            changePIN()
        } else {
            seterror_message('need 6 number')
        }
    }
    useEffect(() => {
        document.title = 'Create PIN';
    }, []);
    useEffect(() => {
        setTimeout(() => {
            seterror_message('')
        }, 7000)
    }, [error_message])
    return (
        <>
            <div className="grid md:grid-cols-5 grid-rows-1">
                <div className="hidden md:block md:col-span-3 md:relative">
                    <img className="h-full w-full object-cover" src={cover_login} alt="" />
                </div>
                <div className="md:col-span-2 flex flex-col mx-10 justify-center items-center">
                    {
                        success_message == 'success-create-otp' ? (
                            <>
                                <i className="fa fa-check-circle w-full text-7xl text-green-600" aria-hidden="true"></i>
                                <p className="text-[#AAAAAA] text-md md:text-lg tracking-wide mb-8 mt-10">Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</p>
                                <button onClick={() => { setsuccess_message(''), seterror_message(''), navigates('/sign-in'); }} className="bg-[#6379F4] mt-5 h-12 md:h-14 w-full rounded-2xl text-black font-semibold tracking-wider text-white font-semibold tracking-wider mt-10">Re-login</button>
                            </>
                        ) : (
                            <>
                                <h1 className="text-2xl md:text-3xl font-bold my-2 mt-10">Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h1>
                                <p className="text-[#AAAAAA] text-md md:text-lg tracking-wide mb-8 mt-10">Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</p>
                                <div className="w-[80%] m-auto flex flex-row gap-2 my-5">
                                    {otp.map((data, i) => {
                                        return (
                                            <input
                                                type="text"
                                                name="otp"
                                                className="border-2  border-blue-600 w-12 h-12 text-2xl rounded-xl m-auto text-center"
                                                maxLength={1}
                                                key={i}
                                                value={data}
                                                onChange={e => handleChange(e.target, i)}
                                                onFocus={e => e.target.select()}
                                            />
                                        );
                                    })}
                                </div>
                                {
                                    error_message != '' ? (
                                        <div className="text-red-600 text-center tracking-wide mb-3 text-sm">{error_message}</div>
                                    ) : ''
                                }
                                <button onClick={submintOtp} type="submit" className={(otp.join("").length === 6 ? 'bg-[#6379F4]' : 'bg-[#e7e7e7]') + " mt-5 h-12 md:h-14 w-full rounded-2xl text-black font-semibold tracking-wider text-white font-semibold tracking-wider mt-10"}>Confirm</button>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Create_otp