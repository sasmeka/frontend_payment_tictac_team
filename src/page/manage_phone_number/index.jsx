import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card_pn from '../../component/manage_pnComp/card_pn'
import Header from '../../component/homeComp/header'
import Footer from '../../component/homeComp/footer'
import Sidebar from '../../component/homeComp/sidebar'


function Manage_phone() {

  const [phone, setPhone] = useState([])

  const getPhone = async () => {
    try {
        const { data } = await axios.get(`http://localhost:8000/`)
        setPhone(data.data)
        console.log(data.data);
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
  getPhone()
}, [])

    return (
        <>
        <Header />
            <div className='bg-gray-200'>
                <div className="p-5 bg-gray-200 max-w-7xl mx-auto">
                    <div className="lg:grid flex flex-col grid-rows-4 grid-flow-col gap-4">
                        <div className="hidden lg:flex row-span-4 auto-cols-min bg-white rounded-lg">
                            <Sidebar />
                        </div>
                            <div className="flex flex-shrink-0 p-3 w-1/3 h-1/3 sm:w-auto rounded-lg bg-slate-100">
                                <Card_pn phone="0859349"/>
                            </div>
                    </div>
                </div>
            </div>
        <Footer />
        </>
        )
    }
    
    export default Manage_phone