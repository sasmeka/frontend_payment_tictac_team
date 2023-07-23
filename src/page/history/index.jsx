import React from 'react'
import Header from '../../component/homeComp/header'
import Footer from '../../component/homeComp/footer'
import profile from '../../assets/img/Default_Profile.png'
import Sidebar from '../../component/homeComp/sidebar'

import authChecked from '../../helper/authCheck'
import useApi from '../../helper/useApi'
import { useState, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../store/reducer/user'
import { useDispatch, useSelector } from "react-redux";


function history() {
    const navigates = useNavigate();
    const dispatch = useDispatch()
    const { data } = useSelector((s) => s.user)
    const api = useApi()

    const [datatrans, setdatatrans] = useState([])
    const [datatransday, setdatatransday] = useState([])
    const [datatransweek, setdatatransweek] = useState([])

    const getDataTransaction = async () => {
        try {
            const { data } = await api({ method: 'get', url: `transaction?show_data_by=month` })
            setdatatrans(data.data)
        } catch (error) {
            // console.log(error.response.data)
        }
    }
    const getDataTransactionday = async () => {
        try {
            const { data } = await api({ method: 'get', url: `transaction?show_data_by=day` })
            setdatatransday(data.data)
        } catch (error) {
            // console.log(error.response.data)
        }
    }
    const getDataTransactionweek = async () => {
        try {
            const { data } = await api({ method: 'get', url: `transaction?show_data_by=week` })
            setdatatransweek(data.data)
        } catch (error) {
            // console.log(error.response.data)
        }
    }

    useEffect(() => {
        getDataTransaction()
        getDataTransactionday()
        getDataTransactionweek()
    }, [])


    return (
        <>
            <Header />
            <div className='bg-gray-200'>
                <div className="p-5 bg-gray-200 max-w-7xl mx-auto">
                    <div className="lg:grid flex flex-col grid-rows-4 grid-flow-col gap-4">
                        <div className="hidden lg:flex row-span-4 w-full bg-white auto-cols-min rounded-lg">
                            <Sidebar />
                        </div>
                        <div class="row-span-4 col-span-10 bg-white md:h-full h-screen rounded-lg overflow-auto ">
                            <div className='flex justify-between mx-5 mt-5'>
                                <h1 className='text-lg font-bold'>Transaction History</h1>
                            </div>
                            <div className='text-sm text-gray-400 mx-5 mt-8'>Today</div>
                            <div className='flex flex-col gap-y-5 mt-5'>
                                <div className='flex flex-col justify-between gap-y-3 mx-5 mt-1'>
                                    {
                                        data[0] ?
                                            datatransday.length != 0 ? (
                                                datatransday.map((v) => {
                                                    return (
                                                        v.user_data_sender[0].id_user == data[0].id_user ? (
                                                            <div key={v.id_transaction} className='flex justify-between mt-5'>
                                                                <div className='flex gap-x-5 items-center'>
                                                                    <img className="w-12 h-12 rounded-lg" src={v.user_data_receiver[0].image} alt="#" />
                                                                    <div className='flex flex-col gap-y-2'>
                                                                        <h3 className='text-sm text-gray-600'>{v.user_data_receiver[0].first_name + ' ' + v.user_data_receiver[0].last_name}</h3>
                                                                        <h3 className='text-xs text-gray-400'>{v.notes ? (v.notes):"no notes"}</h3>
                                                                    </div>
                                                                </div>
                                                                <h3 className='text-lg font-bold text-rose-600'>+Rp. {v.amount}</h3>
                                                            </div>
                                                        ) : (
                                                            <div key={v.id_transaction} className='flex justify-between mt-5'>
                                                                <div className='flex gap-x-5 items-center'>
                                                                    <img className="w-12 h-12 rounded-lg" src={v.user_data_sender[0].image} alt="#" />
                                                                    <div className='flex flex-col gap-y-2'>
                                                                        <h3 className='text-sm text-gray-600'>{v.user_data_sender[0].first_name + ' ' + v.user_data_sender[0].last_name}</h3>
                                                                        <h3 className='text-xs text-gray-400'>{v.notes ? (v.notes):"no notes"}</h3>
                                                                    </div>
                                                                </div>
                                                                <h3 className='text-lg font-bold text-green-600'>+Rp. {v.amount}</h3>
                                                            </div>
                                                        )
                                                    )
                                                })
                                            ) : (
                                                <div className='flex mx-auto flex mt-5'>
                                                    <div>
                                                        <h3 className='text-sm text-gray-600'>No transaction recorded</h3>
                                                    </div>
                                                </div>
                                            ) : ''
                                    }
                                </div>
                            </div>
                            <div className='text-sm text-gray-400 mx-5 mt-8'>This weeks</div>
                            <div className='flex flex-col gap-y-5 mt-5'>
                                <div className='flex flex-col justify-between gap-y-3 mx-5 mt-1'>
                                    {
                                        data[0] ?
                                            datatransweek.length != 0 ? (
                                                datatransweek.map((v) => {
                                                    return (
                                                        v.user_data_sender[0].id_user == data[0].id_user ? (
                                                            <div key={v.id_transaction} className='flex justify-between mt-5'>
                                                                <div className='flex gap-x-5 items-center'>
                                                                    <img className="w-12 h-12 rounded-lg" src={v.user_data_receiver[0].image} alt="#" />
                                                                    <div className='flex flex-col gap-y-2'>
                                                                        <h3 className='text-sm text-gray-600'>{v.user_data_receiver[0].first_name + ' ' + v.user_data_receiver[0].last_name}</h3>
                                                                        <h3 className='text-xs text-gray-400'>{v.notes ? (v.notes):"no notes"}</h3>
                                                                    </div>
                                                                </div>
                                                                <h3 className='text-lg font-bold text-rose-600'>+Rp. {v.amount}</h3>
                                                            </div>
                                                        ) : (
                                                            <div key={v.id_transaction} className='flex justify-between mt-5'>
                                                                <div className='flex gap-x-5 items-center'>
                                                                    <img className="w-12 h-12 rounded-lg" src={v.user_data_sender[0].image} alt="#" />
                                                                    <div className='flex flex-col gap-y-2'>
                                                                        <h3 className='text-sm text-gray-600'>{v.user_data_sender[0].first_name + ' ' + v.user_data_sender[0].last_name}</h3>
                                                                        <h3 className='text-xs text-gray-400'>{v.notes ? (v.notes):"no notes"}</h3>
                                                                    </div>
                                                                </div>
                                                                <h3 className='text-lg font-bold text-green-600'>+Rp. {v.amount}</h3>
                                                            </div>
                                                        )
                                                    )
                                                })
                                            ) : (
                                                <div className='flex mx-auto flex mt-5'>
                                                    <div>
                                                        <h3 className='text-sm text-gray-600'>No transaction recorded</h3>
                                                    </div>
                                                </div>
                                            ) : ''
                                    }
                                </div>
                            </div>
                            <div className='text-sm text-gray-400 mx-5 mt-8'>This month</div>
                            <div className='flex flex-col gap-y-5 my-5'>
                                <div className='flex flex-col justify-between gap-y-3 mx-5 mt-1'>
                                    {
                                        data[0] ?
                                            datatrans.length != 0 ? (
                                                datatrans.map((v) => {
                                                    return (
                                                        v.user_data_sender[0].id_user == data[0].id_user ? (
                                                            <div key={v.id_transaction} className='flex justify-between mt-5'>
                                                                <div className='flex gap-x-5 items-center'>
                                                                    <img className="w-12 h-12 rounded-lg" src={v.user_data_receiver[0].image} alt="#" />
                                                                    <div className='flex flex-col gap-y-2'>
                                                                        <h3 className='text-sm text-gray-600'>{v.user_data_receiver[0].first_name + ' ' + v.user_data_receiver[0].last_name}</h3>
                                                                        <h3 className='text-xs text-gray-400'>{v.notes ? (v.notes):"no notes"}</h3>
                                                                    </div>
                                                                </div>
                                                                <h3 className='text-lg font-bold text-rose-600'>+Rp. {v.amount}</h3>
                                                            </div>
                                                        ) : (
                                                            <div key={v.id_transaction} className='flex justify-between mt-5'>
                                                                <div className='flex gap-x-5 items-center'>
                                                                    <img className="w-12 h-12 rounded-lg" src={v.user_data_sender[0].image} alt="#" />
                                                                    <div className='flex flex-col gap-y-2'>
                                                                        <h3 className='text-sm text-gray-600'>{v.user_data_sender[0].first_name + ' ' + v.user_data_sender[0].last_name}</h3>
                                                                        <h3 className='text-xs text-gray-400'>{v.notes ? (v.notes):"no notes"}</h3>
                                                                    </div>
                                                                </div>
                                                                <h3 className='text-lg font-bold text-green-600'>+Rp. {v.amount}</h3>
                                                            </div>
                                                        )
                                                    )
                                                })
                                            ) : (
                                                <div className='flex mx-auto flex mt-5'>
                                                    <div>
                                                        <h3 className='text-sm text-gray-600'>No transaction recorded</h3>
                                                    </div>
                                                </div>
                                            ) : ''
                                    }
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

export default authChecked(true, history, ['user']) 