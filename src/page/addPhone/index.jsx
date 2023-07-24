import React, { useEffect, useState, useContext } from 'react'
import Header from '../../component/homeComp/header'
import Footer from '../../component/homeComp/footer'
import Sidebar from '../../component/homeComp/sidebar'
import { BsTelephone } from 'react-icons/bs'

import ErrorContext from '../../helper/context_error'
import SuccessContext from '../../helper/context_success'
import authChecked from '../../helper/authCheck'
import { useNavigate } from 'react-router-dom'

import useApi from '../../helper/useApi'

import { adddata } from '../../store/reducer/user'
import { useDispatch, useSelector } from "react-redux";

function addPhone() {
    const api = useApi()
    const dispatch = useDispatch()
    const navigates = useNavigate()
    const { data } = useSelector((s) => s.user)

    const { error_message, seterror_message } = useContext(ErrorContext);
    const { success_message, setsuccess_message } = useContext(SuccessContext);

    const [phone, setPhone] = useState('')

    const updatePhone = async () => {
        const new_data = {
            0: { ...data[0], 'phone': phone }
        }
        try {
            if (phone == '') {
                seterror_message('phone number must be filled.')
            } else {
                const { data } = await api({
                    method: 'POST',
                    url: 'user/add_phone_number',
                    data: {
                        "phone": phone
                    }
                })
                dispatch(adddata(new_data))
                setsuccess_message(data.message)
                navigates('/manage_phone')
            }
        } catch (error) {
            seterror_message(error.response.data.message)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            seterror_message('')
            setsuccess_message('')
        }, 7000)
    }, [error_message, success_message]);

    return (
        <>
            <Header />
            <div className='bg-gray-200'>
                <div className="p-5 bg-gray-200 max-w-7xl mx-auto">
                    <div className="lg:grid flex flex-col grid-rows-4 grid-flow-col gap-4">
                        <div className="hidden lg:flex row-span-4 w-full bg-white auto-cols-min rounded-lg">
                            <Sidebar />
                        </div>
                        <div class="max-h-7xl row-span-4 col-span-10 bg-white rounded-lg overflow-auto">
                            <div className='flex flex-col gap-y-10 justify-between md:text-start text-center p-10 mt-5'>
                                <h1 className='text-lg font-bold'>Add Phone Number</h1>
                                <p className='text-sm text-gray-400'>
                                    Add at least one phone number for the transfer<br /> ID so you can start transfering your money <br /> to another user.
                                </p>
                            </div>
                            <div className='m-2'>
                                <div className='flex justify-start relative w-96 pb-1 mx-auto mb-5'>
                                    <span className={(error_message != '' ? 'text-red-400' : phone == '' ? 'text-[#A9A9A9]' : 'text-[#6379F4]') + " flex gap-x-2 absolute mt-5 ml-2 items-center"}><BsTelephone /></span>
                                    <input onChange={(e) => setPhone(e.target.value)} className={(error_message != '' ? 'border-red-400' : phone == '' ? 'border-opacity-50 border-[#A9A9A9]' : 'border-[#6379F4]') + " focus:outline-none h-12 md:h-14 w-full border-b-[2px] pl-10 placeholder:text-[#A0A3BD] placeholder:tracking-wider"} placeholder='Enter your phone number' type="tel" />
                                </div>
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
                                <div className='mx-auto flex justify-center '>
                                    <button onClick={updatePhone} className={(phone != '' ? 'bg-primary' : 'bg-gray-600') + " mt-5 h-12 md:h-14 w-96 rounded-2xl text-black font-semibold tracking-wider text-white font-semibold tracking-wider"}>Add Phone Number</button>
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

export default authChecked(true, addPhone, ['user'])