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
    const [datatrans_meta, setdatatrans_meta] = useState([])
    const [datatrans_page, setdatatrans_page] = useState(1)

    const [datatransday, setdatatransday] = useState([])
    const [datatransday_meta, setdatatransday_meta] = useState([])
    const [datatransday_page, setdatatransday_page] = useState(1)

    const [datatransweek, setdatatransweek] = useState([])
    const [datatransweek_meta, setdatatransweek_meta] = useState([])
    const [datatransweek_page, setdatatransweek_page] = useState(1)

    const getDataTransaction = async () => {
        try {
            const { data } = await api({ method: 'get', url: `transaction?show_data_by=month&limit=3&page=${datatrans_page}` })
            setdatatrans(data.data)
            setdatatrans_meta(data.meta)
        } catch (error) {
            // console.log(error.response.data)
        }
    }
    const getDataTransactionday = async () => {
        try {
            const { data } = await api({ method: 'get', url: `transaction?show_data_by=day&limit=3&page=${datatransday_page}` })
            setdatatransday(data.data)
            setdatatransday_meta(data.meta)
        } catch (error) {
            // console.log(error.response.data)
        }
    }
    const getDataTransactionweek = async () => {
        try {
            const { data } = await api({ method: 'get', url: `transaction?show_data_by=week&limit=3&page=${datatransweek_page}` })
            setdatatransweek(data.data)
            setdatatransweek_meta(data.meta)
        } catch (error) {
            // console.log(error.response.data)
        }
    }

    useEffect(() => {
        document.title = 'History';
        getDataTransaction()
        getDataTransactionday()
        getDataTransactionweek()
    }, [])
    useEffect(() => {
        getDataTransaction()
        getDataTransactionday()
        getDataTransactionweek()
    }, [datatrans_page, datatransday_page, datatransweek_page])


    return (
        <>
            <Header />
            <div className='bg-gray-200'>
                <div className="p-5 bg-gray-200 max-w-7xl mx-auto">
                    <div className="lg:grid flex flex-col grid-rows-4 grid-flow-col gap-4">
                        <div className="hidden lg:grid row-span-4 grid-rows-4 w-full bg-white auto-cols-min rounded-lg">
                            <Sidebar />
                        </div>
                        <div className="row-span-4 col-span-10 bg-white md:h-full h-screen rounded-lg overflow-auto ">
                            <div className='flex justify-between mx-5 mt-5'>
                                <h1 className='text-lg font-bold'>Transaction History</h1>
                            </div>
                            <div className='text-sm text-gray-400 mx-5 mt-8'>Today</div>
                            <div className='flex flex-col gap-y-5 mt-5 pb-5'>
                                <div className='flex flex-col justify-between gap-y-3 mx-5 mt-1'>
                                    {
                                        data[0] ?
                                            datatransday.length != 0 ? (
                                                <>
                                                    {
                                                        datatransday.map((v) => {
                                                            return (
                                                                v.user_data_sender[0].id_user == data[0].id_user ? (
                                                                    <div key={v.id_transaction} className='flex justify-between mt-5'>
                                                                        <div className='flex gap-x-5 items-center'>
                                                                            <img className="w-12 h-12 rounded-lg" src={process.env.REACT_APP_API_URL + v.user_data_receiver[0].image} alt="#" />
                                                                            <div className='flex flex-col gap-y-2'>
                                                                                <h3 className='text-sm text-gray-600'>{v.user_data_receiver[0].first_name + ' ' + v.user_data_receiver[0].last_name}</h3>
                                                                                <h3 className='text-xs text-gray-400'>Transfer to</h3>
                                                                            </div>
                                                                        </div>
                                                                        <h3 className='text-sm font-semibold text-rose-600'>-Rp. {new Intl.NumberFormat('en-DE').format(v.amount)}</h3>
                                                                    </div>
                                                                ) : (
                                                                    <div key={v.id_transaction} className='flex justify-between mt-5'>
                                                                        <div className='flex gap-x-5 items-center'>
                                                                            <img className="w-12 h-12 rounded-lg" src={process.env.REACT_APP_API_URL + v.user_data_sender[0].image} alt="#" />
                                                                            <div className='flex flex-col gap-y-2'>
                                                                                <h3 className='text-sm text-gray-600'>{v.user_data_sender[0].first_name + ' ' + v.user_data_sender[0].last_name}</h3>
                                                                                <h3 className='text-xs text-gray-400'>Transfer from</h3>
                                                                            </div>
                                                                        </div>
                                                                        <h3 className='text-sm font-semibold text-green-600'>+Rp. {new Intl.NumberFormat('en-DE').format(v.amount)}</h3>
                                                                    </div>
                                                                )
                                                            )
                                                        })
                                                    }
                                                    {
                                                        datatransday_meta.next != null ? (
                                                            <div className="mt-10 px-5 md:px-20">
                                                                <h1 className="border-b leading-[0.1rem] border-[#DEDEDE] text-center">
                                                                    <span className="bg-[#FCFCFC] text-center"><Link onClick={() => { setdatatransday_page(datatransday_page + 1) }} className="p-5 text-[#5F2EEA] font-semibold text-md">view more</Link></span>
                                                                </h1>
                                                            </div>
                                                        ) : ('')
                                                    }
                                                </>
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
                            <div className='flex flex-col gap-y-5 mt-5 pb-5'>
                                <div className='flex flex-col justify-between gap-y-3 mx-5 mt-1'>
                                    {
                                        data[0] ?
                                            datatransweek.length != 0 ? (
                                                <>
                                                    {
                                                        datatransweek.map((v) => {
                                                            return (
                                                                v.user_data_sender[0].id_user == data[0].id_user ? (
                                                                    <div key={v.id_transaction} className='flex justify-between mt-5'>
                                                                        <div className='flex gap-x-5 items-center'>
                                                                            <img className="w-12 h-12 rounded-lg" src={process.env.REACT_APP_API_URL + v.user_data_receiver[0].image} alt="#" />
                                                                            <div className='flex flex-col gap-y-2'>
                                                                                <h3 className='text-sm text-gray-600'>{v.user_data_receiver[0].first_name + ' ' + v.user_data_receiver[0].last_name}</h3>
                                                                                <h3 className='text-xs text-gray-400'>Transfer to</h3>
                                                                            </div>
                                                                        </div>
                                                                        <h3 className='text-sm font-semibold text-rose-600'>-Rp. {new Intl.NumberFormat('en-DE').format(v.amount)}</h3>
                                                                    </div>
                                                                ) : (
                                                                    <div key={v.id_transaction} className='flex justify-between mt-5'>
                                                                        <div className='flex gap-x-5 items-center'>
                                                                            <img className="w-12 h-12 rounded-lg" src={process.env.REACT_APP_API_URL + v.user_data_sender[0].image} alt="#" />
                                                                            <div className='flex flex-col gap-y-2'>
                                                                                <h3 className='text-sm text-gray-600'>{v.user_data_sender[0].first_name + ' ' + v.user_data_sender[0].last_name}</h3>
                                                                                <h3 className='text-xs text-gray-400'>Transfer from</h3>
                                                                            </div>
                                                                        </div>
                                                                        <h3 className='text-sm font-semibold text-green-600'>+Rp. {new Intl.NumberFormat('en-DE').format(v.amount)}</h3>
                                                                    </div>
                                                                )
                                                            )
                                                        })
                                                    }
                                                    {
                                                        datatransweek_meta.next != null ? (
                                                            <div className="mt-10 px-5 md:px-20">
                                                                <h1 className="border-b leading-[0.1rem] border-[#DEDEDE] text-center">
                                                                    <span className="bg-[#FCFCFC] text-center"><Link onClick={() => { setdatatransweek_page(datatransweek_page + 1) }} className="p-5 text-[#5F2EEA] font-semibold text-md">view more</Link></span>
                                                                </h1>
                                                            </div>
                                                        ) : ('')
                                                    }
                                                </>
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
                            <div className='flex flex-col gap-y-5 my-5 pb-5'>
                                <div className='flex flex-col justify-between gap-y-3 mx-5 mt-1'>
                                    {
                                        data[0] ?
                                            datatrans.length != 0 ? (
                                                <>
                                                    {
                                                        datatrans.map((v) => {
                                                            return (
                                                                v.user_data_sender[0].id_user == data[0].id_user ? (
                                                                    <div key={v.id_transaction} className='flex justify-between mt-5'>
                                                                        <div className='flex gap-x-5 items-center'>
                                                                            <img className="w-12 h-12 rounded-lg" src={process.env.REACT_APP_API_URL + v.user_data_receiver[0].image} alt="#" />
                                                                            <div className='flex flex-col gap-y-2'>
                                                                                <h3 className='text-sm text-gray-600'>{v.user_data_receiver[0].first_name + ' ' + v.user_data_receiver[0].last_name}</h3>
                                                                                <h3 className='text-xs text-gray-400'>Transfer to</h3>
                                                                            </div>
                                                                        </div>
                                                                        <h3 className='text-sm font-semibold text-rose-600'>-Rp. {new Intl.NumberFormat('en-DE').format(v.amount)}</h3>
                                                                    </div>
                                                                ) : (
                                                                    <div key={v.id_transaction} className='flex justify-between mt-5'>
                                                                        <div className='flex gap-x-5 items-center'>
                                                                            <img className="w-12 h-12 rounded-lg" src={process.env.REACT_APP_API_URL + v.user_data_sender[0].image} alt="#" />
                                                                            <div className='flex flex-col gap-y-2'>
                                                                                <h3 className='text-sm text-gray-600'>{v.user_data_sender[0].first_name + ' ' + v.user_data_sender[0].last_name}</h3>
                                                                                <h3 className='text-xs text-gray-400'>Transfer from</h3>
                                                                            </div>
                                                                        </div>
                                                                        <h3 className='text-sm font-semibold text-green-600'>+Rp. {new Intl.NumberFormat('en-DE').format(v.amount)}</h3>
                                                                    </div>
                                                                )
                                                            )
                                                        })
                                                    }
                                                    {
                                                        datatrans_meta.next != null ? (
                                                            <div className="mt-10 px-5 md:px-20">
                                                                <h1 className="border-b leading-[0.1rem] border-[#DEDEDE] text-center">
                                                                    <span className="bg-[#FCFCFC] text-center"><Link onClick={() => { setdatatrans_page(datatrans_page + 1) }} className="p-5 text-[#5F2EEA] font-semibold text-md">view more</Link></span>
                                                                </h1>
                                                            </div>
                                                        ) : ('')
                                                    }
                                                </>
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