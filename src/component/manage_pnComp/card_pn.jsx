import React from 'react'

function Card_pn({ phone }) {

    return (
            <div className="flex flex-col gap-3">
                    <div className="w-full bg-white shadow-sm rounded-lg p-7 flex flex-col">
                        <label className="text-gray-400 text-sm">Primary</label>
                        <div className='relative'>
                        <input type="text" name="phone" value={phone} className="font-medium text-md" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 right-3 -translate-y-1/2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#999999" 
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path 
                        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17">
                            </line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        </div>
                    </div>
            </div>
    )
}   

export default Card_pn