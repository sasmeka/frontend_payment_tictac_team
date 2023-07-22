import React from 'react'
import Header from '../../component/homeComp/header'
import Footer from '../../component/homeComp/footer'
import Sidebar from '../../component/homeComp/sidebar'
import {BsTelephone} from 'react-icons/bs'


function changePin() {
    return (
        <>
            <Header />
            <div className='bg-gray-200'>
                <div className="p-5 bg-gray-200 max-w-7xl mx-auto">
                    <div className="md:grid flex flex-col grid-rows-4 grid-flow-col gap-4">
                        <div className="hidden md:flex row-span-4 w-full bg-white auto-cols-min rounded-lg">
                            <Sidebar />
                        </div>
                        <div class="max-h-7xl row-span-4 col-span-10 bg-white rounded-lg overflow-auto">
                            <div className='flex flex-col gap-y-10 justify-between md:text-start text-center p-10 mt-5'>
                                <h1 className='text-lg font-bold'>Add PIN</h1>
                                <p className='text-sm text-gray-400'>
                                Enter your current 6 digits Zwallet PIN below to <br />continue to the next steps.
                                </p>
                            </div>
                            <div className='max-w-7xl md:h-auto h-96 md:mt-24 mt-10'>
                                <div class="flex flex-row items-center justify-center px-2 gap-x-2 md:gap-x-5 mx-auto">
                                    <div class="md:w-20 w-12 md:h-24 h-16 ">
                                        <input class="w-full h-full flex flex-col items-center justify-center text-center md:px-5 px-1 outline-none rounded-xl border border-gray-200 text-2xl md:text-3xl bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
                                    </div>
                                    <div class="md:w-20 w-12 md:h-24 h-16 ">
                                        <input class="w-full h-full flex flex-col items-center justify-center text-center md:px-5 px-1 outline-none rounded-xl border border-gray-200 text-2xl md:text-3xl bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
                                    </div>
                                    <div class="md:w-20 w-12 md:h-24 h-16 ">
                                        <input class="w-full h-full flex flex-col items-center justify-center text-center md:px-5 px-1 outline-none rounded-xl border border-gray-200 text-2xl md:text-3xl bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
                                    </div>
                                    <div class="md:w-20 w-12 md:h-24 h-16 ">
                                        <input class="w-full h-full flex flex-col items-center justify-center text-center md:px-5 px-1 outline-none rounded-xl border border-gray-200 text-2xl md:text-3xl bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
                                    </div>
                                    <div class="md:w-20 w-12 md:h-24 h-16 ">
                                        <input class="w-full h-full flex flex-col items-center justify-center text-center md:px-5 px-1 outline-none rounded-xl border border-gray-200 text-2xl md:text-3xl bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
                                    </div>
                                    <div class="md:w-20 w-12 md:h-24 h-16 ">
                                        <input class="w-full h-full flex flex-col items-center justify-center text-center md:px-5 px-1 outline-none rounded-xl border border-gray-200 text-2xl md:text-3xl bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
                                    </div>
                                </div>
                                <div className='mx-auto flex justify-center '>
                                    <button className='bg-gray-200 text-gray-500 md:w-96 w-72 mt-16 h-12 rounded-lg hover:bg-gray-600 hover:text-white'>Continue</button>
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

export default changePin