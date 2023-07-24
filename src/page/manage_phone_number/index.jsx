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
                        <div className="hidden lg:flex row-span-4 col-span-3 bg-white rounded-lg">
                            <Sidebar />
                        </div>
                        <div class="row-span-4 col-span-9 bg-white md:h-full h-screen rounded-lg overflow-auto pb-10">
                            <div className='flex justify-between mx-5 mt-5 mb-10'>
                                <h1 className='text-lg font-bold'>How To Top Up</h1>
                            </div>
                            <div className='grid gap-y-4 mx-10'>
                                {/* <div className="flex flex-shrink-0 p-3 w-1/3 h-1/3 sm:w-auto rounded-lg bg-slate-100"> */}
                                <Card_pn phone="0859349" />
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Manage_phone