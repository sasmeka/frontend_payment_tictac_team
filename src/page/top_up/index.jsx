import React from 'react'
import Header from '../../component/homeComp/header'
import Footer from '../../component/homeComp/footer'
import Sidebar from '../../component/homeComp/sidebar'
import authChecked from '../../helper/authCheck'

function Top_up() {
    useEffect(() => {
        document.title = 'Top Up';
    }, []);
    return (
        <>
            <Header />
            <div className='bg-gray-200'>
                <div className="p-5 bg-gray-200 max-w-7xl mx-auto">
                    <div className="lg:grid flex flex-col grid-rows-4 grid-flow-col gap-4">
                        <div className="hidden lg:grid row-span-4 grid-rows-4 w-full bg-white auto-cols-min rounded-lg">
                            <Sidebar />
                        </div>
                        <div class="row-span-4 col-span-9 bg-white md:h-full h-screen rounded-lg overflow-auto pb-10">
                            <div className='flex justify-between mx-5 mt-5 mb-10'>
                                <h1 className='text-lg font-bold'>How To Top Up</h1>
                            </div>
                            <div className='grid gap-y-4 mx-10'>
                                <div className="w-full bg-white shadow-xl rounded-lg p-5 flex flex-col">
                                    <h1 className="text-center md:text-left text-[10px] md:text-md lg:text-lg text-primary font-bold">1
                                        <span className="text-[10px] md:text-md lg:text-lg text-gray-400 ml-5 font-normal">Go to the nearest ATM or you can use E-Banking.</span>
                                    </h1>
                                </div>
                                <div className="w-full bg-white shadow-xl rounded-lg p-5 flex flex-col">
                                    <h1 className="text-center md:text-left text-[10px] md:text-md lg:text-lg text-primary font-bold">2
                                        <span className="text-[10px] md:text-md lg:text-lg text-gray-400 ml-5 font-normal">Type your security number on the ATM or E-Banking.</span>
                                    </h1>
                                </div>
                                <div className="w-full bg-white shadow-xl rounded-lg p-5 flex flex-col">
                                    <h1 className="text-center md:text-left text-[10px] md:text-md lg:text-lg text-primary font-bold">3
                                        <span className="text-[10px] md:text-md lg:text-lg text-gray-400 ml-5 font-normal">Select “Transfer” in the menu.</span>
                                    </h1>
                                </div>
                                <div className="w-full bg-white shadow-xl rounded-lg p-5 flex flex-col">
                                    <h1 className="text-center md:text-left text-[10px] md:text-md lg:text-lg text-primary font-bold">4
                                        <span className="text-[10px] md:text-md lg:text-lg text-gray-400 ml-5 font-normal">Type the virtual account number that we provide you at the top.</span>
                                    </h1>
                                </div>
                                <div className="w-full bg-white shadow-xl rounded-lg p-5 flex flex-col">
                                    <h1 className="text-center md:text-left text-[10px] md:text-md lg:text-lg text-primary font-bold">5
                                        <span className="text-[10px] md:text-md lg:text-lg text-gray-400 ml-5 font-normal">Type the amount of the money you want to top up.</span>
                                    </h1>
                                </div>
                                <div className="w-full bg-white shadow-xl rounded-lg p-5 flex flex-col">
                                    <h1 className="text-center md:text-left text-[10px] md:text-md lg:text-lg text-primary font-bold">6
                                        <span className="text-[10px] md:text-md lg:text-lg text-gray-400 ml-5 font-normal">Read the summary details.</span>
                                    </h1>
                                </div>
                                <div className="w-full bg-white shadow-xl rounded-lg p-5 flex flex-col">
                                    <h1 className="text-center md:text-left text-[10px] md:text-md lg:text-lg text-primary font-bold">7
                                        <span className="text-[10px] md:text-md lg:text-lg text-gray-400 ml-5 font-normal">Press transfer / top up.</span>
                                    </h1>
                                </div>
                                <div className="w-full bg-white shadow-xl rounded-lg p-5 flex flex-col">
                                    <h1 className="text-center md:text-left text-[10px] md:text-md lg:text-lg text-primary font-bold">8
                                        <span className="text-[10px] md:text-md lg:text-lg text-gray-400 ml-5 font-normal">You can see your money in Zwallet within 3 hours.</span>
                                    </h1>
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

export default authChecked(true, Top_up, ['user'])