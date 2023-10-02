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








            {/* <div className="Frame163526 w-96 h-48 pb-12 border-b border-gray-200 justify-start items-start gap-6 inline-flex">
                <div className="Icon71 w-20 h-20 relative flex-col justify-start items-start inline-flex">
                    <div className="Layer1 w-20 h-20 relative">
                    </div>
                </div>
                <div className="Frame163525 justify-start items-start gap-96 flex">
                    <div className="Frame163524 flex-col justify-start items-start gap-6 inline-flex">
                        <div className="Frame163523 flex-col justify-start items-start gap-4 flex">
                            <div className="Frame163522 justify-center items-center gap-2.5 inline-flex">
                                <div className='flex gap-5' >
                                   <img src={touchIcon} alt=''/>
                                    <h1 className="Helpmeout text-black text-5xl font-semibold font-['Sora']" >HelpMeOut</h1>
                                </div>
                            </div>
                            <div className="Frame163521 justify-start items-start gap-5 inline-flex">
                                <div className="Frame163519 justify-start items-end gap-2 flex">
                                    <div className="Verify w-6 h-6 relative">
                                    </div>
                                    <div className="HelpmeoutCom text-center text-sky-600 text-xl font-medium font-['Work Sans']">Helpmeout.com</div>
                                </div>
                                <div className="Frame163520 justify-start items-start gap-2 flex">
                                    <div className="Medal w-6 h-6 relative">
                                    </div>
                                    <div className="Featured text-center text-sky-600 text-xl font-medium font-['Work Sans']">Featured</div>
                                </div>
                            </div>
                        </div>
                        <div className="Frame372 justify-center items-center gap-3 inline-flex">
                            <div className="Frame370 justify-start items-center gap-2 flex">
                                <div className="Frame369 justify-start items-start gap-1 flex" />
                                <div className=" text-black text-lg font-normal font-['Work Sans']">252</div>
                                <div className="InfoCircle w-6 h-6 justify-center items-center flex">
                                    <div className="InfoCircle w-6 h-6 relative">
                                    </div>
                                </div>
                            </div>
                            <div className="Line19 w-6 h-px origin-top-left rotate-90 border border-black"></div>
                            <div className="Productivity text-sky-600 text-lg font-normal font-['Work Sans']">Productivity</div>
                            <div className="Line20 w-6 h-px origin-top-left rotate-90 border border-black"></div>
                            <div className="000Users text-zinc-600 text-lg font-normal font-['Work Sans']">80,000+ users</div>
                        </div>
                    </div>
                    <div className="Frame379 justify-start items-start gap-40 flex">
                        <div className="Frame368 px-4 py-3 bg-sky-600 rounded justify-center items-center gap-2.5 flex">
                            <div className="AddToChrome text-white text-lg font-medium font-['Work Sans']">Add to Chrome</div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Help