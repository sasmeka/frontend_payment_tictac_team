import React from 'react'
import Header from '../../component/homeComp/header'
import Footer from '../../component/homeComp/footer'
import { LiaArrowUpSolid } from 'react-icons/lia'
import { AiOutlinePlus } from 'react-icons/ai'
import up from '../../assets/img/arrow-up.svg'
import down from '../../assets/img/down.svg'
import dummyData from '../../assets/img/graphic.svg'
import profile from '../../assets/img/Default_Profile.png'
import Sidebar from '../../component/homeComp/sidebar'
import {BsTelephone} from 'react-icons/bs'

import authChecked from '../../helper/authCheck'
import useApi from '../../helper/useApi'
import { useState, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";



function home() {
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
                        <div className="hidden lg:flex row-span-4 bg-white auto-cols-min rounded-lg">
                            <Sidebar />
                        </div>
                        <div className="col-span-2 bg-primary h-40 flex items-center rounded-lg justify-between px-10 py-5">
                            <div className='flex flex-col gap-y-3'>
                                <h2 className='text-lg text-gray-300 mt-2'>Balance</h2>
                                <h1 className='text-4xl text-white font-bold'>Rp.{data[0] ? data[0].balance:""}</h1>
                                {data[0] ? data[0].phone === ''?(
                                    <h3 className='text-lg text-gray-300'>-</h3>
                                ):(
                                    <h3 className='text-lg text-gray-300'>{data[0].phone}</h3>
                                ):""}
                            </div>
                            <div className='lg:flex hidden flex-col gap-y-3'>
                                <button className='flex text-white border items-center gap-x-3 w-28 justify-center hover:bg-white hover:text-primary rounded-lg h-12 mx-auto'><LiaArrowUpSolid /> Transfer</button>
                                <button className='flex text-white border items-center gap-x-3 w-28 justify-center hover:bg-white hover:text-primary rounded-lg h-12 mx-auto'><AiOutlinePlus /> Top Up</button>
                            </div>
                        </div>
                        <div className="lg:flex flex-col hidden row-span-3 bg-white rounded-lg">
                            <div className='flex justify-between p-4 mt-5 mx-5'>
                                <div>
                                    <img src={down} alt="" />
                                    <h2>Income</h2>
                                    <h2>Rp2.120.000</h2>
                                </div>
                                <div>
                                    <img src={up} alt="" />
                                    <h2>Expense</h2>
                                    <h2>Rp1.560.000</h2>
                                </div>
                            </div>
                            <img src={dummyData} alt="" className='mt-20 pb-5 flex px-5 items-center mx-auto' />
                        </div>
                        <div className="row-span-3 bg-white rounded-lg overflow-auto">
                            <div className='flex justify-between mx-5 mt-5'>
                                <h1 className='text-lg font-bold'>Transaction History</h1>
                                <Link to='/history' className='text-base text-primary hover:font-bold'>view all</Link>
                            </div>
                            <div className='flex flex-col gap-y-5 mt-5'>
                                <div className='flex flex-col justify-between gap-y-3 mx-5 mt-1'>
                                    {
                                        data[0] ?
                                            datatrans.length != 0 ? (
                                                datatrans.map((v) => {
                                                    return (
                                                        v.user_data_sender[0].id_user == data[0].id_user ? (
                                                            <div key={v.id_transaction} className='flex flex mt-5'>
                                                                <img src={up} alt="#" />
                                                                <div>
                                                                    <h3 className='text-sm text-gray-600'>{v.user_data_receiver[0].first_name + ' ' + v.user_data_receiver[0].last_name}</h3>
                                                                    <h3 className='text-lg font-bold text-rose-600'>+Rp. {v.amount}</h3>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div key={v.id_transaction} className='flex flex mt-5'>
                                                                <img src={down} alt="#" />
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

export default authChecked(true, home, ['user'])