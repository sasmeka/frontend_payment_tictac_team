import React from 'react'
import { RxDashboard } from 'react-icons/rx'
import { LiaArrowUpSolid } from 'react-icons/lia'
import { MdPersonOutline, MdLogout } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'

import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../store/reducer/user'
import { useDispatch } from "react-redux";

function sidebar() {
  const navigates = useNavigate();
  const dispatch = useDispatch()

  const btnlogout = () => {
    dispatch(logout())
    navigates(`/sign-in`)
  }
  return (
    <>
        <div className="hidden lg:grid row-span-4 w-full bg-white rounded-lg">
          <div className='relative flex h-full flex-col gap-y-3 mx-5 mt-5'>
            <Link to="/Home" className='flex items-center text-lg gap-x-3 hover:text-primary hover:font-bold '> <RxDashboard /> Dashboard</Link>
            <Link to="/transfer" className='flex items-center text-lg gap-x-3 hover:text-primary hover:font-bold'><LiaArrowUpSolid /> Transfer</Link>
            <Link to="/top_up" className='flex items-center text-lg gap-x-3 hover:text-primary hover:font-bold'><AiOutlinePlus /> Top Up</Link>
            <Link to="/profile" className='flex items-center text-lg gap-x-3 hover:text-primary hover:font-bold'><MdPersonOutline /> Profile</Link>
            <Link onClick={btnlogout} className='absolute right-0 left-0 bottom-10 flex items-center text-lg gap-x-3 hover:text-primary hover:font-bold'><MdLogout /> Logout</Link>
          </div>
        </div>
    </>
  )
}

export default sidebar