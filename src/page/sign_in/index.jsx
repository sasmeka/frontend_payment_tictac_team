import React from 'react'
import cover_login from '../../assets/img/cover_login.png'

function Sign_in() {
    return (
        <>
            <div className="grid md:grid-cols-5 grid-rows-1">
                <div className="hidden md:block md:col-span-3 md:relative">
                    <img className="h-full w-full object-cover" src={cover_login} alt="" />
                </div>
                <div className="md:col-span-2 flex flex-col mt-20 mx-10">
                    <form>
                        <h1 className="text-2xl md:text-3xl font-bold my-2">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h1>
                        <p className="text-[#AAAAAA] text-md md:text-lg tracking-wide mb-8">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                        <div className="flex flex-col mb-5">
                            <input type="text" className="h-12 md:h-14 w-full border-b-4 pl-3 placeholder:text-[#A0A3BD] placeholder:tracking-wider" placeholder="Enter your e-mail" />
                        </div>
                        <div className="flex flex-col mb-5">
                            <div className="relative w-full items-center">
                                <input type="password" className="h-12 md:h-14 w-full border-b-4 pl-3 placeholder:text-[#A0A3BD] placeholder:tracking-wider" placeholder="Enter your password" />
                            </div>
                        </div>
                        <p className="text-right text-[#8692A6] tracking-wide text-sm md:text-md my-4">
                            <a href="/#" className="text-[#8692A6] underline underline-offset-4 font-semibold">Forgot password?</a>
                        </p>
                        <button type="submit" className="mt-5 h-12 md:h-14 w-full bg-[#e7e7e7] rounded-2xl text-black font-semibold tracking-wider text-white font-semibold tracking-wider" >Sign In</button>
                        <p className="text-center text-[#8692A6] tracking-wide text-sm md:text-md">
                            Don't have an account? Let's <a href="/sign-up" className="text-[#5F2EEA] underline underline-offset-4 font-semibold">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Sign_in