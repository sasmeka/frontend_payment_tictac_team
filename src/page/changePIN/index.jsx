import React, { useEffect, useState, useContext } from 'react'
import Header from '../../component/homeComp/header'
import Footer from '../../component/homeComp/footer'
import Sidebar from '../../component/homeComp/sidebar'

import useApi from '../../helper/useApi'
import { adddata } from '../../store/reducer/user'
import { useDispatch, useSelector } from "react-redux";

import SuccessContext from "../../helper/context_success";
import ErrorContext from "../../helper/context_error";
import authChecked from '../../helper/authCheck'

function changePin() {
    const api = useApi()
    const dispatch = useDispatch()
    const { data } = useSelector((s) => s.user)

    const [status_change_pin, setstatus_change_pin] = useState(false)
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [otpold, setOtpold] = useState(new Array(6).fill(""));
    const { error_message, seterror_message } = useContext(ErrorContext);
    const { success_message, setsuccess_message } = useContext(SuccessContext);
    //input value get
    const handleChangeold = (el, index) => {
        if (isNaN(el.value)) return false

        setOtpold([...otpold.map((data, i) => (i === index ? el.value : data))])

        if (el.nextSibling) {
            el.nextSibling.focus()
        }
    }

    const handleChange = (el, index) => {
        if (isNaN(el.value)) return false

        setOtp([...otp.map((data, i) => (i === index ? el.value : data))])

        if (el.nextSibling) {
            el.nextSibling.focus()
        }
    }

    const changePIN = async () => {
        const new_data = {
            0: { ...data[0], 'pin': otp.join("") }
        }
        try {
            await api({
                method: 'PUT',
                url: 'user/change_pin',
                data: {
                    pin: otp.join("")
                }
            })
            dispatch(adddata(new_data))
            setOtp(new Array(6).fill(""))
            seterror_message('')
            setsuccess_message('update PIN succesfull.')
        } catch (error) {
            seterror_message(error.response.data.message)
        }
    }

    //onClick event
    const submintOtpold = () => {
        if (otpold.join("").length === 6) {
            if (otpold.join("") == data[0].pin) {
                seterror_message('')
                setstatus_change_pin(true)
            } else {
                setOtpold(new Array(6).fill(""))
                seterror_message('mismatched pins')
            }
        } else {
            seterror_message('need 6 number')
        }
    }

    const submintOtp = (e) => {
        e.preventDefault()
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
            setsuccess_message('')
        }, 15000)
    }, [error_message, success_message])
    return (
        <>
            <Header />
            <div className='bg-gray-200'>
                <div className="p-5 bg-gray-200 max-w-7xl mx-auto">
                    <div className="lg:grid flex flex-col grid-rows-4 grid-flow-col gap-4">
                        <div className="hidden lg:grid row-span-4 grid-rows-4 w-full bg-white auto-cols-min rounded-lg">
                            <Sidebar />
                        </div>
                        <div className="max-h-7xl row-span-4 col-span-10 bg-white rounded-lg overflow-auto">
                            <div className='flex flex-col gap-y-10 justify-between md:text-start text-center p-10 mt-5'>
                                <h1 className='text-lg font-bold'>Change PIN</h1>
                                {
                                    status_change_pin ? (
                                        <p className='text-sm text-gray-400'>
                                            Type your new 6 digits security PIN to use in <br /> Zwallet.
                                        </p>
                                    ) : (
                                        <p className='text-sm text-gray-400'>
                                            Enter your current 6 digits Zwallet PIN below to <br />continue to the next steps.
                                        </p>
                                    )
                                }
                            </div>
                            <div className='max-w-7xl md:h-auto h-96 md:mt-16 mt-10'>
                                {
                                    status_change_pin ? (
                                        <>
                                            <form onSubmit={submintOtp}>
                                                <div className="flex flex-row items-center justify-center px-2 gap-x-2 md:gap-x-5 mx-auto">
                                                    <div className="flex flex-row md:gap-x-1 gap-x-2 mx-auto">
                                                        {otp.map((data, i) => {
                                                            return (
                                                                <input
                                                                    type="text"
                                                                    name="otp"
                                                                    className="md:w-16 md:h-16 w-10 h-10 items-center justify-center text-center md:px-5 px-1 outline-none rounded-xl border border-gray-200 text-2xl md:text-3xl bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                                                    maxLength={1}
                                                                    key={i}
                                                                    value={data}
                                                                    onChange={e => handleChange(e.target, i)}
                                                                    onFocus={e => e.target.select()}
                                                                />
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                                <div className='mx-auto flex justify-center mt-5'>
                                                    <div>
                                                        {
                                                            error_message != '' ? (
                                                                <div className="text-red-400 text-center tracking-wide mb-3 text-sm">{error_message}</div>
                                                            ) : (
                                                                success_message != '' ? (
                                                                    <div className="text-green-600 text-center tracking-wide mb-3 text-sm">{success_message}</div>
                                                                ) : (
                                                                    <div>&nbsp;</div>
                                                                )
                                                            )
                                                        }
                                                        <button type='submit' className={(otp.join("").length === 6 ? "bg-[#6379F4] text-white" : "bg-[#e7e7e7] text-gray-500") + ' md:w-96 w-72 h-12 rounded-lg hover:bg-gray-600 hover:text-white'}>Change PIN</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex flex-row items-center justify-center px-2 gap-x-2 md:gap-x-5 mx-auto">
                                                <div className="flex flex-row md:gap-x-1 gap-x-2 mx-auto">
                                                    {otpold.map((data, i) => {
                                                        return (
                                                            <input
                                                                type="text"
                                                                name="otpold"
                                                                className="md:w-16 md:h-16 w-10 h-10 items-center justify-center text-center md:px-5 px-1 outline-none rounded-xl border border-gray-200 text-2xl md:text-3xl bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                                                maxLength={1}
                                                                key={i}
                                                                value={data}
                                                                onChange={e => handleChangeold(e.target, i)}
                                                                onFocus={e => e.target.select()}
                                                            />
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                            <div className='mx-auto flex justify-center mt-5'>
                                                <div>
                                                    {
                                                        error_message != '' ? (
                                                            <div className="text-red-400 text-center tracking-wide mb-3 text-sm">{error_message}</div>
                                                        ) : (
                                                            success_message != '' ? (
                                                                <div className="text-green-600 text-center tracking-wide mb-3 text-sm">{success_message}</div>
                                                            ) : (
                                                                <div>&nbsp;</div>
                                                            )
                                                        )
                                                    }
                                                    <button onClick={submintOtpold} className={(otpold.join("").length === 6 ? "bg-[#6379F4] text-white" : "bg-[#e7e7e7] text-gray-500") + ' md:w-96 w-72 h-12 rounded-lg hover:bg-gray-600 hover:text-white'}>Continue</button>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default authChecked(true, changePin, ['user'])