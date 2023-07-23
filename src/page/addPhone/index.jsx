import React, { useEffect, useState, useContext } from 'react'
import Header from '../../component/homeComp/header'
import Footer from '../../component/homeComp/footer'
import Sidebar from '../../component/homeComp/sidebar'
import {BsTelephone} from 'react-icons/bs'
import useApi from '../../helper/useApi'

import ErrorContext from '../../helper/context_error'
import SuccessContext from '../../helper/context_success'
import authChecked from '../../helper/authCheck'


function addPhone() {
    const api = useApi()

    const { error_message, seterror_message } = useContext(ErrorContext);
    const { success_message, setsuccess_message } = useContext(SuccessContext);

    const [phone, setPhone] = useState('')

    const updatePhone = async (e) => {
        e.preventDefault()
        try {
            const { data } = await api({
                method: 'POST',
                url: 'user/add_phone_number',
                data: {
                    "phone": phone
                }
            })
            setsuccess_message(data.message)
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
                        <div class="max-h-7xl row-span-4 col-span-10 bg-white h-screen rounded-lg overflow-auto">
                            <div className='flex flex-col gap-y-10 justify-between md:text-start text-center p-10 mt-5'>
                                <h1 className='text-lg font-bold'>Add Phone Number</h1>
                                <p className='text-sm text-gray-400'>
                                Add at least one phone number for the transfer<br /> ID so you can start transfering your money <br/> to another user.
                                </p>
                            </div>
                            <div className='m-2'>
                                <div className='flex justify-start w-96 pb-1 mx-auto'>
                                    <span className='flex gap-x-2 items-center'><BsTelephone/></span>
                                    <input onChange={(e) => setPhone(e.target.value)} className={(error_message != '' ? 'border-red-400' : phone == '' ? 'border-opacity-50 border-[#A9A9A9]' : 'border-[#6379F4]') + " focus:outline-none h-12 md:h-14 w-full border-b-[2px] pl-10 placeholder:text-[#A0A3BD] placeholder:tracking-wider"} placeholder='Enter your phone number' type="tel" />
                                </div>
                                <div className='mx-auto flex justify-center '>
                                    <button onClick={updatePhone} className={(phone != '' ? 'bg-primary' : 'bg-gray-600') + " mt-10 h-12 md:h-14 w-96 rounded-2xl text-black font-semibold tracking-wider text-white font-semibold tracking-wider"}>Add Phone Number</button>
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