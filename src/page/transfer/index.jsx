import React, { useState, useEffect, useContext } from "react";
import Header from "../../component/homeComp/header";
import Footer from "../../component/homeComp/footer";
import Sidebar from "../../component/homeComp/sidebar";

import Confirmation from "../../component/transfComp/confirmation";
import Cards from "../../component/transfComp/cardsContact";
import StatusTransf from "../../component/transfComp/statusTransf";

import authChecked from '../../helper/authCheck'
import useApi from '../../helper/useApi'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

import SuccessContext from "../../helper/context_success";
import ErrorContext from "../../helper/context_error";

function Transfer() {
    const { data } = useSelector((s) => s.user)
    const api = useApi()


    const { error_message, seterror_message } = useContext(ErrorContext);
    const { success_message, setsuccess_message } = useContext(SuccessContext);

    const [datauser, setdatauser] = useState([])
    const [datauser_meta, setdatauser_meta] = useState([])
    const [datauser_page, setdatauser_page] = useState(1)
    const [search, setsearch] = useState('')
    const [selectedid_user, setselectedid_user] = useState('')
    const [selectedname, setselectedname] = useState('')
    const [selectedphone, setselectedphone] = useState('')
    const [selectedimage, setselectedimage] = useState('')
    const [amount, setamount] = useState(0)
    const [notes, setnotes] = useState('')
    const [pageconfirm, setpageconfirm] = useState(false)
    const [balance, setbalance] = useState(data[0] ? data[0].balance : 0)
    const [create_date, setcreate_date] = useState('')
    const [status_transfer, setstatus_transfer] = useState('')

    const getDataUser = async () => {
        try {
            const { data } = await api({ method: 'get', url: `user?limit=2&page=${datauser_page}&search=${search}` })
            setdatauser(data.data)
            setdatauser_meta(data.meta)
        } catch (error) {
            // console.log(error.response.data)
        }
    }

    const transferFailed = () => {
        setpageconfirm(false)
        setstatus_transfer('')
    }

    useEffect(() => {
        document.title = 'Transfer';
        getDataUser()
    }, [])

    useEffect(() => {
        getDataUser()
    }, [datauser_page, search])

    useEffect(() => {
        setTimeout(() => {
            seterror_message('')
            setsuccess_message('')
        }, 7000)
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
                        <div className="row-span-4 col-span-10 bg-white md:h-full h-screen rounded-lg overflow-auto pb-10">
                            <div className={(selectedid_user != '' ? 'hidden' : '') + " m-10"}>
                                <h1 className="text-sm md:text-md font-bold">Search Receiver</h1>
                                <input type="search" name="search" id="" onChange={(e) => setsearch(e.target.value)} placeholder="Search receiver here" className="bg-gray-200 w-full rounded-[5px] p-2 text-xs placeholder:text-xs my-3" />
                                <div className="flex flex-col gap-3">
                                    {
                                        data[0] ?
                                            datauser.length > 0 ? (
                                                <>
                                                    {
                                                        datauser.map((v) => {
                                                            return (
                                                                <button key={v.id_user} onClick={() => { setselectedid_user(v.id_user), setselectedname(v.first_name + ' ' + v.last_name), setselectedphone(v.phone == '' || v.phone == null ? ' - ' : v.phone), setselectedimage(process.env.REACT_APP_API_URL + v.image) }}>
                                                                    < Cards
                                                                        image={process.env.REACT_APP_API_URL + v.image}
                                                                        name={v.first_name + ' ' + v.last_name}
                                                                        telp={v.phone == '' || v.phone == null ? ' - ' : v.phone}
                                                                    />
                                                                </button>
                                                            )
                                                        })
                                                    }
                                                    {
                                                        datauser_meta.next != null ? (
                                                            <div className="mt-10 px-5 md:px-20">
                                                                <h1 className="border-b leading-[0.1rem] border-[#DEDEDE] text-center">
                                                                    <span className="bg-[#FCFCFC] text-center"><Link onClick={() => { setdatauser_page(datauser_page + 1) }} className="p-5 text-[#5F2EEA] font-semibold text-md">view more</Link></span>
                                                                </h1>
                                                            </div>
                                                        ) : ('')
                                                    }
                                                </>

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
                            <div className={(selectedid_user == '' || pageconfirm ? 'hidden' : '') + " relative m-10"}>
                                <h1 className="text-sm md:text-md font-bold">Transfer Money</h1>
                                <div className="flex flex-col gap-3 mt-5 md:mt-10">
                                    <Cards
                                        image={selectedimage}
                                        name={selectedname}
                                        telp={selectedphone}
                                    />
                                </div>
                                <p className="text-md mt-5 md:mt-10 text-[#7A7886] mb-20">
                                    Type the amount you want to transfer and then <br />
                                    press continue to the next steps.
                                </p>
                                <div className="flex flex-col items-center justify-center mb-5">
                                    <div className="flex flex-col items-center mb-10">
                                        <input onChange={(e) => setamount(e.target.value)} type="text" name="amount" placeholder="0.00" id="" className="flex text-4xl placeholder:text-4xl p-2 text-primary font-bold text-center mb-5 focus:outline-none" />
                                        <h5 className="font-bold text-mb">Rp. {data[0] ? new Intl.NumberFormat('en-DE').format(data[0].balance) : ''} Available</h5>
                                    </div>
                                    <div className={(notes == '' ? 'border-b-[#7A7886] border-opacity-50' : 'border-b-primary') + " flex gap-2 items-center border-b-[1px] py-2"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none">
                                            <   path d="M17 3.0003C17.2626 2.73766 17.5744 2.52932 17.9176 2.38718C18.2608 2.24503 18.6286 2.17188 19 2.17188C19.3714 2.17187 19.7392 2.24503 20.0824 2.38718C20.4256 2.52932 20.7374 2.73766 21 3.0003C21.2626 3.26295 21.471 3.57475 21.6131 3.91791C21.7553 4.26107 21.8284 4.62887 21.8284 5.0003C21.8284 5.37174 21.7553 5.73953 21.6131 6.08269C21.471 6.42585 21.2626 6.73766 21 7.0003L7.5 20.5003L2 22.0003L3.5 16.5003L17 3.0003Z" stroke={(notes == '' ? '#7A7886' : '#6379F4')} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <input onChange={(e) => setnotes(e.target.value)} type="text" name="desc" id="" placeholder="Add some notes" className="text-md palceholder:text-md focus:outline-none" />
                                    </div>
                                </div>{
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
                                <div className="flex justify-end mt-20">
                                    <button onClick={() => { amount != 0 ? setpageconfirm(true) : seterror_message('amount not zero.') }} className="bg-primary w-[80px] p-2 text-white text-xs rounded-lg ">
                                        Continue
                                    </button>
                                </div>
                            </div>
                            {
                                pageconfirm ? <Confirmation id={selectedid_user} name={selectedname} image={selectedimage} phone={selectedphone} amount={amount} notes={notes} balance_left={balance - amount} create_date={setcreate_date} pin_user={data[0] ? data[0].pin : ''} date_select={create_date} setstatus_transfer={setstatus_transfer} status_transfer={status_transfer} /> : ('')
                            }
                            {
                                status_transfer === '' ? "" :
                                    <StatusTransf name={selectedname} image={selectedimage} phone={selectedphone} amount={amount} notes={notes} balance_left={balance - amount} date_select={create_date} setstatus_transfer={setstatus_transfer} status_transfer={status_transfer} transferFailed={transferFailed} />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default authChecked(true, Transfer, ['user'])