import React from 'react'
import cover_login from '../../assets/img/cover_login.png'

function Reset_password() {
    return (
        <>
            <div className="grid md:grid-cols-5 grid-rows-1">
                <div className="hidden md:block md:col-span-3 md:relative">
                    <img className="h-full w-full object-cover" src={cover_login} alt="" />
                </div>
                <div className="md:col-span-2 flex flex-col mx-10 justify-center items-center">
                    <form>
                        <h1 className="text-2xl md:text-3xl font-bold my-2 mt-10">Did You Forgot Your Password?
                            Don’t Worry, You Can Reset Your
P                           assword In a Minutes.</h1>
                        <p className="text-[#AAAAAA] text-md md:text-lg tracking-wide mb-8 mt-10">To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
                        <div className="flex flex-col mb-5">
                            <input type="text" className="h-12 md:h-14 w-full border-b-4 pl-3 placeholder:text-[#A0A3BD] placeholder:tracking-wider mt-10" placeholder="Enter your e-mail" />
                        </div>
                        <button type="submit" className="mt-5 h-12 md:h-14 w-full bg-[#e7e7e7] rounded-2xl text-black font-semibold tracking-wider text-white font-semibold tracking-wider mt-10" >Confirm</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Reset_password