import React, { useEffect, useState, useContext } from 'react'
import Card_pn from '../../component/manage_pnComp/card_pn'
import Header from '../../component/homeComp/header'
import Footer from '../../component/homeComp/footer'
import Sidebar from '../../component/homeComp/sidebar'

import authChecked from '../../helper/authCheck'
import ErrorContext from '../../helper/context_error'
import SuccessContext from '../../helper/context_success'

import { useNavigate } from 'react-router-dom'

import useApi from '../../helper/useApi'

import { adddata } from '../../store/reducer/user'
import { useDispatch, useSelector } from "react-redux";

function Manage_phone() {
    const api = useApi()
    const dispatch = useDispatch()
    const navigates = useNavigate()
    const { data } = useSelector((s) => s.user)

    const { error_message, seterror_message } = useContext(ErrorContext);
    const { success_message, setsuccess_message } = useContext(SuccessContext);

    const delete_phone = async () => {
        const new_data = {
            0: { ...data[0], 'phone': '' }
        }
        try {
            await api({
                method: 'DELETE',
                url: 'user/delete_phone_number'
            })
            dispatch(adddata(new_data))
            seterror_message('')
            setsuccess_message('delete phone number succesfull.')
            navigates('/personal-info')
        } catch (error) {
            seterror_message(error.response.data.message)
        }
    }

    useEffect(() => {
        data[0] ? data[0].phone == null || data[0].phone == '' ? navigates('/add-phone') : '' : ''
        document.title = 'Manage Phone Number';
    }, [])

    return (
        <>
            <Header />
            <div className='bg-gray-200'>
                <div className="p-5 bg-gray-200 max-w-7xl mx-auto">
                    <div className="lg:grid flex flex-col grid-rows-4 grid-flow-col gap-4">
                        <div className="hidden lg:flex row-span-4 col-span-3 bg-white rounded-lg">
                            <Sidebar />
                        </div>
                        <div class="row-span-4 col-span-9 bg-white md:h-full h-screen rounded-lg overflow-auto pb-10">
                            <div className='flex justify-between mx-5 mt-5 mb-10 ml-5'>
                                <h1 className='text-lg font-bold'>Manage Phone Number</h1>
                            </div>
                            <div className='flex justify-between mt-5 ml-5'>
                                <p className="text-[#AAAAAA] text-md md:text-lg tracking-wide ">
                                    You can only delete the phone number and then</p>

                            </div>
                            <div className='flex justify-between ml-6'>
                                <p className="text-[#AAAAAA] text-md md:text-lg tracking-wide mb-5">
                                    you must add another phone number.</p>
                            </div>
                            <div className='grid gap-y-4 mx-10'>
                                {/* <div className="flex flex-shrink-0 p-3 w-1/3 h-1/3 sm:w-auto rounded-lg bg-slate-100"> */}
                                <Card_pn phone={data[0] ? data[0].phone : ''} delete_phone={delete_phone} />
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default authChecked(true, Manage_phone, ['user'])