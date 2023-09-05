import React, { useState, useEffect } from 'react'
import up from '../../assets/img/arrow-up.svg'
import down from '../../assets/img/down.svg'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'

import useApi from '../../helper/useApi'

import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../store/reducer/user'
import { useDispatch, useSelector } from "react-redux";

function header() {
    const navigates = useNavigate();
    const dispatch = useDispatch()
    const { data } = useSelector((s) => s.user)
    const api = useApi()

    const [datatransweek, setdatatransweek] = useState([])
    const [datatransday, setdatatransday] = useState([])

    const getDataTransactionDay = async () => {
        try {
            const { data } = await api({ method: 'get', url: `transaction?show_data_by=day&limit=2` })
            setdatatransday(data.data)
        } catch (error) {
            // console.log(error.response.data)
        }
    }

    function capitalName(text) {
        return text.replace(/\w\S*/g, function (word) {
            const newWord = word.slice(0, 1).toUpperCase() + word.substr(1);
            return newWord;
        });
    }

    const getDataTransactionWeek = async () => {
        try {
            const { data } = await api({ method: 'get', url: `transaction?show_data_by=week&limit=2` })
            setdatatransweek(data.data)
        } catch (error) {
            // console.log(error.response.data)
        }
    }

    useEffect(() => {
        getDataTransactionDay()
        getDataTransactionWeek()
    }, [])

    return (
        <header className='relative bg-gray-100'>
            <div className='rounded-b-3xl border bg-white w-full h-auto'>
                <div className='flex justify-between max-w-7xl mx-auto p-5 items-center'>
                    <div className='lg:flex hidden'>
                        <h1 className='font-bold text-3xl text-primary'>Zwallet</h1>
                    </div>
                    <div className='flex lg:mx-0 justify-between gap-x-4 items-center'>
                        <img src={data[0] && data[0].image != '' ? data[0].image : ''} alt="#" className='w-14 h-14 rounded-lg object-cover' />
                        <div className='flex flex-col text-right justify-end'>
                            <h2 className='font-bold text-lg'>{data[0] ? capitalName(data[0].first_name + ' ' + data[0].last_name) : ''}</h2>
                            <h2 className='text-xs text-gray-600'>{data[0] ? data[0].phone == '' || data[0].phone == null ? ' - ' : data[0].phone : ''}</h2>
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn m-1"><IoIosNotificationsOutline className='w-7 h-7' /></label>
                            <ul tabIndex={0} className="dropdown-content flex flex-col gap-y-4 z-[1] menu py-6 px-6 mt-8 shadow bg-base-100 rounded-box w-72">
                                <li className='flex'>
                                    <div>Today</div>
                                    {
                                        data[0] ?
                                            datatransday.length != 0 ? (
                                                datatransday.map((v) => {
                                                    return (
                                                        v.user_data_sender[0].id_user == data[0].id_user ? (
                                                            <div key={v.id_transaction} className='flex border shadow flex mt-5'>
                                                                <img src={up} alt="#" />
                                                                <div>
                                                                    <h3 className='text-sm text-gray-600'>Transfered to {v.user_data_receiver[0].first_name + ' ' + v.user_data_receiver[0].last_name}</h3>
                                                                    <h3 className='text-lg font-bold'>Rp. {v.amount}</h3>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div key={v.id_transaction} className='flex border shadow flex mt-5'>
                                                                <img src={down} alt="#" />
                                                                <div>
                                                                    <h3 className='text-sm text-gray-600'>Transfered from {v.user_data_sender[0].first_name + ' ' + v.user_data_sender[0].last_name}</h3>
                                                                    <h3 className='text-lg font-bold'>Rp. {v.amount}</h3>
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
                                </li>
                                <li className='flex'>
                                    <div>This weeks</div>
                                    {
                                        data[0] ?
                                            datatransweek.length != 0 ? (
                                                datatransweek.map((v) => {
                                                    return (
                                                        v.user_data_sender[0].id_user == data[0].id_user ? (
                                                            <div key={v.id_transaction} className='flex border shadow flex mt-5'>
                                                                <img src={up} alt="#" />
                                                                <div>
                                                                    <h3 className='text-sm text-gray-600'>Transfered to {v.user_data_receiver[0].first_name + ' ' + v.user_data_receiver[0].last_name}</h3>
                                                                    <h3 className='text-lg font-bold'>Rp. {v.amount}</h3>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div key={v.id_transaction} className='flex border shadow flex mt-5'>
                                                                <img src={down} alt="#" />
                                                                <div>
                                                                    <h3 className='text-sm text-gray-600'>Transfered from {v.user_data_sender[0].first_name + ' ' + v.user_data_sender[0].last_name}</h3>
                                                                    <h3 className='text-lg font-bold'>Rp. {v.amount}</h3>
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
                                </li>
                            </ul>
                        </div >

                    </div >
                    <div className="flex lg:hidden dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="btn m-1"><GiHamburgerMenu className='lg:hidden flex w-6 h-6' /></label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Dashboad</Link></li>
                            <li><Link to='/profile'>Profile</Link></li>
                            <li><Link onClick={() => { dispatch(logout()), navigates('/sign-in') }}>Logout</Link></li>
                        </ul>
                    </div>
                </div >
            </div >
        </header >
    )
}

export default header