import React from 'react'
import cover_login from '../../assets/img/cover_login.png'

function Create_otp() {
    const [otp,setOtp]=React.useState(new Array(6).fill(""));
//input value get
    const handleChange=(el,index) =>
    {
        if(isNaN(el.value)) return false


        setOtp([...otp.map((data,i) => (i===index? el.value : data))])
        
        if(el.nextSibling)
        {
            el.nextSibling.focus()
        }
    }
//onClick event
    const submintOtp=() =>
    {
        otp.join("").length===6?alert('created'):alert('need 6 number')
    }
    return (
        <>
            <div className="grid md:grid-cols-5 grid-rows-1">
                <div className="hidden md:block md:col-span-3 md:relative">
                    <img className="h-full w-full object-cover" src={cover_login} alt="" />
                </div>
                <div className="md:col-span-2 flex flex-col mx-10 justify-center items-center">
                    <form>
                        <h1 className="text-2xl md:text-3xl font-bold my-2 mt-10">Secure Your Account, Your Wallet,
                            and Your Data With 6 Digits PIN
                            That You Created Yourself.</h1>
                        <p className="text-[#AAAAAA] text-md md:text-lg tracking-wide mb-8 mt-10">Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</p>
                            <div className="w-[80%] m-auto flex flex-row gap-2 my-5">
                                {otp.map((data, i) => {
                                    return (
                                    <input
                                            type="text"
                                            name="otp"
                                        className="border-2  border-blue-600 w-12 h-12 text-2xl rounded-xl m-auto text-center"
                                            maxLength={1}
                                            key={i}
                                            value={data}
                                            onChange={e => handleChange(e.target, i)}
                                            onFocus={e=>e.target.select()}
                                    />
                                    );
                                })}
                        </div>
                        <button onClick={submintOtp} type="submit" className="mt-5 h-12 md:h-14 w-full bg-[#e7e7e7] rounded-2xl text-black font-semibold tracking-wider text-white font-semibold tracking-wider mt-10" >Confirm</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Create_otp