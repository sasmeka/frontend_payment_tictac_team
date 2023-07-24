import React, { useEffect, useRef, useState, useContext } from "react";
import Header from "../../component/homeComp/header";
import Footer from "../../component/homeComp/footer";
import Sidebar from "../../component/homeComp/sidebar";

import { Link, useNavigate } from 'react-router-dom'
import { logout, adddata } from '../../store/reducer/user'
import { useDispatch, useSelector } from "react-redux";
import authChecked from '../../helper/authCheck'

import SuccessContext from "../../helper/context_success";
import ErrorContext from "../../helper/context_error";
import useApi from '../../helper/useApi'

function Profile() {
    const api = useApi()
    const { data } = useSelector((s) => s.user)
    const navigates = useNavigate();
    const dispatch = useDispatch()

    const imgRef = useRef(null);

    const { error_message, seterror_message } = useContext(ErrorContext);
    const { success_message, setsuccess_message } = useContext(SuccessContext);

    const btnlogout = () => {
        dispatch(logout())
        navigates(`/sign-in`)
    }

    const getDataUser = async () => {
        try {
            const { data } = await api({ method: 'get', url: `user/bytoken` })
            dispatch(adddata(data.data))
        } catch (error) {
            if (error.response.data.status == 401) {
                seterror_message(error.response.data.message)
                btnlogout()
            }
            seterror_message(error.response.data.message)
            console.log(error.response.data)
        }
    }

    const [id_user, setid_user] = useState(data[0] ? data[0].id_user : '')
    const [full_name, setfull_name] = useState(data[0] ? data[0].first_name + ' ' + data[0].last_name : '')
    const [email, setemail] = useState(data[0] ? data[0].email : '')
    const [image, setimage] = useState(data[0] ? data[0].image : '');
    const [imagereader, setimagereader] = useState("");

    const formData = new FormData();
    formData.append("first_name", full_name.split(' ')[0]);
    formData.append("last_name", full_name.split(' ').slice(1, full_name.split(' ').length).join(' '));
    formData.append("email", email);
    formData.append("image", image);

    function capitalName(text) {
        return text.replace(/\w\S*/g, function (word) {
            const newWord = word.slice(0, 1).toUpperCase() + word.substr(1);
            return newWord;
        });
    }

    const changeImage = async () => {
        try {
            const { data } = await api({
                method: 'put', data: formData, url: `user/${id_user}`,
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            getDataUser()
            // setsuccess_message(data.message)
            // console.log(data.message)
        } catch (error) {
            if (error.response.data.status == 401) {
                seterror_message(error.response.data.message)
                dispatch(logout())
                navigates(`/sign-in`)
            }
            seterror_message(error.response.data.error)
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        document.title = 'Profile';
    }, [])
    useEffect(() => {
        changeImage()
    }, [imagereader])
    return (
        <>
            <Header />
            <div className='bg-gray-200'>
                <div className="p-5 bg-gray-200 max-w-7xl mx-auto">
                    <div className="lg:grid flex flex-col grid-rows-4 grid-flow-col gap-4">
                        <div className="hidden lg:flex row-span-4 auto-cols-min bg-white rounded-lg">
                            <Sidebar />
                        </div>
                        <div className="row-span-4 col-span-9 bg-white shadow-sm rounded-[15px] px-10 pt-16 pb-10 flex items-center flex-col">
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex w-[130px] mt-5 mb-2">
                                    <Link className="flex h-[130px] w-[130px]" id="file" onClick={() => { imgRef.current.showPicker(); }} >
                                        <img className="w-full object-cover rounded-lg" src={imagereader == "" ? process.env.REACT_APP_API_URL + image : imagereader} alt="" />
                                    </Link>
                                    <input
                                        type="file"
                                        ref={imgRef}
                                        multiple
                                        accept="image/*"
                                        onChange={(e) => [
                                            setimage(e.target.files[0]),
                                            setimagereader(URL.createObjectURL(e.target.files[0]))
                                        ]}
                                        className="hidden h-10 w-full border rounded pl-3"
                                    />
                                </div>
                                <Link className="mb-2" id="file" onClick={() => { imgRef.current.showPicker(); }}>
                                    <i className="text-[#A0A3BD] hover:text-[#6379F4] fa fa-pencil top-4 md:top-[1.1rem] left-3" aria-hidden="true"> Edit</i>
                                </Link>
                                <h1 className="font-bold text-xl">{data[0] ? capitalName(data[0].first_name + ' ' + data[0].last_name) : ''}</h1>
                                <h3 className="text-lg text-gray-400 ">{data[0] ? data[0].phone == '' || data[0].phone == null ? ' - ' : data[0].phone : ''}</h3>
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
                            <div className="flex flex-col gap-3 my-5 w-full items-center">
                                <button className="bg-gray-200 p-3 h-10 md:h-16 w-8/12 rounded-lg my-2">
                                    <Link to="/personal-info" className="flex justify-between items-center text-xs md:text-sm font-medium pl-5">
                                        Personal Information
                                    </Link>
                                </button>
                                <button className="bg-gray-200 p-3 h-10 md:h-16 w-8/12 rounded-lg my-2">
                                    <Link to="/change-password" className="flex justify-between items-center text-xs md:text-sm font-medium pl-5">
                                        Change Password
                                    </Link>
                                </button>
                                <button className="bg-gray-200 p-3 h-10 md:h-16 w-8/12 rounded-lg my-2">
                                    <Link to="/change-pin" className="flex justify-between items-center text-xs md:text-sm font-medium pl-5">
                                        Change PIN
                                    </Link>
                                </button>
                                <button onClick={btnlogout} className="bg-gray-200 p-3 h-10 md:h-16 w-8/12 rounded-lg my-2">
                                    <Link className="flex justify-between items-center text-xs md:text-sm font-medium pl-5">
                                        Logout
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default authChecked(true, Profile, ['user'])