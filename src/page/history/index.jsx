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
    console.log(data)
    const api = useApi()

    const [datatrans, setdatatrans] = useState([])

    const getDataTransaction = async () => {
        try {
            const { data } = await api({ method: 'get', url: `transaction` })
            setdatatrans(data.data)
        } catch (error) {
            // console.log(error.response.data)
        }
    }

    useEffect(() => {
        getDataTransaction()
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
                        <div class="max-h-7xl row-span-4 col-span-10 bg-white md:h-auto h-screen rounded-lg overflow-auto">
                            <div className='flex justify-between mx-5 mt-5'>
                                <h1 className='text-lg font-bold'>Transaction History</h1>
                                <button className='text-base text-primary hover:text-lg'>view all</button>
                            </div>
                            <div className='text-sm text-gray-400 mx-5 mt-8'>This week</div>
                            <div className='flex flex-col gap-y-5 mt-5'>
                                <div className='flex flex-col justify-between gap-y-3 mx-5 mt-1'>
                                    {
                                        data[0] ?
                                            datatrans.length != 0 ? (
                                                datatrans.map((v) => {
                                                    return (
                                                        v.user_data_sender[0].id_user == data[0].id_user ? (
                                                            <div key={v.id_transaction} className='flex flex mt-5'>
                                                                <img src={profile} alt="#" />
                                                                <div>
                                                                    <h3 className='text-sm text-gray-600'>{v.user_data_receiver[0].first_name + ' ' + v.user_data_receiver[0].last_name}</h3>
                                                                    <h3 className='text-lg font-bold text-rose-600'>+Rp. {v.amount}</h3>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div key={v.id_transaction} className='flex flex mt-5'>
                                                                <img src={profile} alt="#" />
                                                                <div>
                                                                    <h3 className='text-sm text-gray-600'>{v.user_data_sender[0].first_name + ' ' + v.user_data_sender[0].last_name}</h3>
                                                                    <h3 className='text-lg text-green-600 font-bold'>-Rp. {v.amount}</h3>
                                                                </div>
                                                            </div>
                                                        )
                                                    )
                                                })
                                            ) : (
                                                <div className='flex border shadow flex mt-5'>
                                                    <div>
                                                        <h3 className='text-sm text-gray-600'>Data not found.</h3>
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