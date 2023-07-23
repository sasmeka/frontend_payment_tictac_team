import React, { useEffect, useState, useContext } from 'react'
import Header from '../../component/homeComp/header'
import Footer from '../../component/homeComp/footer'
import Sidebar from '../../component/homeComp/sidebar'
import {BsTelephone, BsEyeSlash} from 'react-icons/bs'
import {GoLock} from 'react-icons/go'

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
    const navigate  = useNavigate()

    const { error_message, seterror_message } = useContext(ErrorContext);
    const { success_message, setsuccess_message } = useContext(SuccessContext);

    const [pass, setPass] = useState('')
    const [newPass, setNewpass] = useState('')

    const updatePassword = async (e) => {
        e.preventDefault()
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
            dispatch(logout())
            navigate('/sign-in')
        } catch (error) {
            seterror_message(error.response.data.message)
            console.log(error.response.data.message)
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
                                <h1 className='text-lg font-bold'>Change Password</h1>
                                <p className='text-sm text-gray-400 tracking-wider'>
                                You must enter your current password and <br/>then type your new password twice.
                                </p>
                            </div>
                            <div className=''>
                                <div className='flex justify-start w-96 pb-1 mx-auto border border-b-2 border-x-0 border-t-0 mt-14'>
                                    <span className='flex gap-x-2 items-center'><GoLock/></span>
                                    <input onChange={(e) => setPass(e.target.value)} className='w-96 h-12 pl-5' placeholder='Type your current password' type="password" />
                                    <span className='flex gap-x-2 items-center'><BsEyeSlash className='w-5 h-5'/></span>
                                </div>
                                <div className='flex justify-start w-96 pb-1 mx-auto border border-b-2 border-x-0 border-t-0 mt-16'>
                                    <span className='flex gap-x-2 items-center'><GoLock/></span>
                                    <input className='w-96 h-12 pl-5' placeholder='type your new password' type="password" />
                                    <span className='flex gap-x-2 items-center'><BsEyeSlash className='w-5 h-5'/></span>
                                </div>
                                <div className='flex justify-start w-96 pb-1 mx-auto border border-b-2 border-x-0 border-t-0 mt-16'>
                                    <span className='flex gap-x-2 items-center'><GoLock/></span>
                                    <input onChange={(e) => setNewpass(e.target.value)} className='w-96 h-12 pl-5' placeholder='Retype your new password' type="password" />
                                    <span className='flex gap-x-2 items-center'><BsEyeSlash className='w-5 h-5'/></span>
                                </div>
                                <div className='mx-auto flex justify-center '>
                                    <button onClick={updatePassword} className='bg-gray-200 text-gray-500 w-96 mt-16 h-12 mb-16 rounded-lg hover:bg-gray-600 hover:text-white'>Change Password</button>
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