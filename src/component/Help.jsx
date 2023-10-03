import React from 'react'
import touchIcon from '../assets/iCON 7 1.svg'
import verify from '../assets/verify.png'
import featured from '../assets/medal.svg'
import star from '../assets/Star 1.svg'
import info from '../assets/info-circle.svg'

const Help = () => {
    return (
        <div>
            <div className='flex gap-[400px] border-b border-gray-200 ' >
                <div className='flex gap-5' >
                    <img src={touchIcon} alt='' className='w-20 h-20' />
                    <h1 className="Helpmeout text-black text-5xl font-semibold font-['Sora']">HelpMeOut</h1>
                </div>
                <div className="Frame368 px-4 py-3 bg-sky-600 rounded justify-center items-center gap-2.5 flex">
                    <div className="AddToChrome text-white text-lg font-medium font-['Work Sans']">Add to Chrome</div>
                </div>
            </div>
            <div className='inline-flex gap-5 ' >
                <div className='flex' >
                    <img src={verify} alt="" className='w-6 h-6 relative' />
                    <h3 className="HelpmeoutCom text-center text-sky-600 text-xl font-medium font-['Work Sans']">Helpmeout.com</h3>
                </div>
                <div className='flex' >
                    <img src={featured} alt="" className='w-6 h-6 relative' />
                    <div className="Featured text-center text-sky-600 text-xl font-medium font-['Work Sans']">Featured</div>
                </div>

            </div>
            <div className='flex gap-3' >
                <div className='inline-flex gap-3' >
                    <div className='flex' >
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    </div>
                    <div className="text-black text-lg font-normal font-['Work Sans']">
                    <h3>252</h3>
                    </div>
                    <img src={info} alt="" />
                </div>
                
                <div>
                    <div
                        className="border border-black w-0.5 h-10"></div>
                </div>

                <div>
                    <h3 className="text-sky-600 text-lg font-normal font-['Work Sans']" >Productivity</h3>
                </div>

                <div>
                    <div
                        className="border border-black w-0.5 h-10"></div>
                </div>
                <div>
                    <h3>80,000 + users</h3>
                </div>
            </div>
        </div>
    )
}

export default Help