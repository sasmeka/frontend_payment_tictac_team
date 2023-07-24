import React from 'react'
import Header from '../../component/homeComp/header'
import Footer from '../../component/homeComp/footer'
import Sidebar from '../../component/homeComp/sidebar'

function Top_up() {
    return (
        <>
        <Header />
            <div className='bg-gray-200'>
                <div className="p-5 bg-gray-200 max-w-7xl mx-auto">
                    <div className="lg:grid flex flex-col grid-rows-4 grid-flow-col gap-4">
                        <div className="hidden lg:flex row-span-4 auto-cols-min bg-white rounded-lg">
                            <Sidebar />
                        </div>
                        <div className="w-full bg-white shadow-sm rounded-lg p-5 flex flex-col">
                            <h1 className="text-center md:text-left text-[10px] md:text-[17px] lg:text-[25px] text-primary">1 
                            <span className="text-[10px] md:text-[17px] lg:text-[25px] text-gray-400 ml-5">Go to the nearest ATM or you can use E-Banking.</span></h1>
                        </div>
                        <div className="w-full bg-white shadow-sm rounded-lg p-5 flex flex-col">
                            <h1 className="text-center md:text-left text-[10px] md:text-[17px] lg:text-[25px] text-primary">2 
                            <span className="text-[10px] md:text-[17px] lg:text-[25px] text-gray-400 ml-5">Type your security number on the ATM or E-Banking.</span></h1>
                        </div>
                        <div className="w-full bg-white shadow-sm rounded-lg p-5 flex flex-col">
                            <h1 className="text-center md:text-left text-[10px] md:text-[17px] lg:text-[25px] text-primary">3 
                            <span className="text-[10px] md:text-[17px] lg:text-[25px] text-gray-400 ml-5">Select “Transfer” in the menu.</span></h1>
                        </div>
                        <div className="w-full bg-white shadow-sm rounded-lg p-5 flex flex-col">
                            <h1 className="text-center md:text-left text-[10px] md:text-[17px] lg:text-[25px] text-primary">4 
                            <span className="text-[10px] md:text-[17px] lg:text-[25px] text-gray-400 ml-5">Type the virtual account number that we provide you at the top.</span></h1>
                        </div>
                        <div className="w-full bg-white shadow-sm rounded-lg p-5 flex flex-col">
                            <h1 className="text-center md:text-left text-[10px] md:text-[17px] lg:text-[25px] text-primary">5 
                            <span className="text-[10px] md:text-[17px] lg:text-[25px] text-gray-400 ml-5">Type the amount of the money you want to top up.</span></h1>
                        </div>
                        <div className="w-full bg-white shadow-sm rounded-lg p-5 flex flex-col">
                            <h1 className="text-center md:text-left text-[10px] md:text-[17px] lg:text-[25px] text-primary">6 
                            <span className="text-[10px] md:text-[17px] lg:text-[25px] text-gray-400 ml-5">Read the summary details.</span></h1>
                        </div>
                        <div className="w-full bg-white shadow-sm rounded-lg p-5 flex flex-col">
                            <h1 className="text-center md:text-left text-[10px] md:text-[17px] lg:text-[25px] text-primary">7 
                            <span className="text-[10px] md:text-[17px] lg:text-[25px] text-gray-400 ml-5">Press transfer / top up.</span></h1>
                        </div>
                        <div className="w-full bg-white shadow-sm rounded-lg p-5 flex flex-col">
                            <h1 className="text-center md:text-left text-[10px] md:text-[17px] lg:text-[25px] text-primary">8 
                            <span className="text-[10px] md:text-[17px] lg:text-[25px] text-gray-400 ml-5">You can see your money in Zwallet within 3 hours.</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
        </>
    )
}

export default Top_up