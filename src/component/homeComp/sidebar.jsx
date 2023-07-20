import React from 'react'
import {RxDashboard} from 'react-icons/rx'
import { LiaArrowUpSolid } from 'react-icons/lia'
import {MdPersonOutline, MdLogout} from 'react-icons/md'
import {AiOutlinePlus} from 'react-icons/ai'



function sidebar() {
  return (
    <div class="row-span-4 bg-white auto-cols-min rounded-lg">
        <div className='flex flex-col gap-y-10 mt-10 mx-10 my-8'>
            <a href="#" className='flex items-center text-lg gap-x-3 hover:text-primary hover:font-bold '> <RxDashboard/> Dashboard</a>
            <a href="#" className='flex items-center text-lg gap-x-3 hover:text-primary hover:font-bold'><LiaArrowUpSolid/> Transfer</a>
            <a href="#" className='flex items-center text-lg gap-x-3 hover:text-primary hover:font-bold'><AiOutlinePlus /> Top Up</a>
            <a href="#" className='flex items-center text-lg gap-x-3 hover:text-primary hover:font-bold'><MdPersonOutline/> Profile</a>
            <div className='mt-96'>
                <a href="#" className='text-lg hover:text-primary flex items-center gap-x-3 hover:font-bold'><MdLogout /> Logout</a>
            </div>
        </div>
</div>
  )
}

export default sidebar