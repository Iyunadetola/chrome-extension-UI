import React from 'react'
import bigIcon from '../assets/iCON 7 1.svg'
import settings from '../assets/setting-2.svg'
import close from '../assets/close-circle.svg'
import copy from '../assets/copy.svg'
import monitor from '../assets/monitor.svg'
import logo from '../assets/Frame 1000002580.svg'


const Helptwo = () => {
    return (
        <div className='md:flex gap-60' >
            <div className=" h-96 px-6 pt-6 pb-8 bg-white rounded-3xl shadow flex-col justify-center items-center  inline-flex">
                <div className="self-stretch justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-2 flex">
                        <div className="w-6 h-6 relative">
                            <div className="w-7 h-7 left-[-0px] top-[-0.11px] absolute">
                            </div>
                        </div>
                        <div>
                            <img src={logo} alt="" srcset="" />
                        </div>
                    </div>
                    <div className="justify-start items-start gap-3 flex">
                        <div className="w-5 h-5 justify-center items-center flex">
                            <div className="w-5 h-5 relative">
                                <img src={settings} alt="" />
                            </div>
                        </div>
                        <div className="w-5 h-5 justify-center items-center flex">
                            <div className="w-5 h-5 relative">
                                <img src={close} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-8 flex">
                    <div className="flex-col justify-center items-center gap-6 flex">
                        <div className="self-stretch px-8 justify-between items-center inline-flex">
                            <div className="flex-col justify-center items-center gap-2 inline-flex">
                                <div className="w-8 h-8 justify-center items-center inline-flex">
                                    <div className="w-8 h-8 relative">
                                        <img src={monitor} alt="" />
                                    </div>
                                </div>
                                <div className="text-gray-400 text-sm font-medium font-['Work Sans']">Full screen</div>
                            </div>
                            <div className="flex-col justify-center items-center gap-2 inline-flex">
                                <div className="w-8 h-8 justify-center items-center inline-flex">
                                    <div className="w-8 h-8 relative">
                                        <img src={copy} alt="" />
                                    </div>
                                </div>
                                <div className="text-indigo-950 text-sm font-semibold font-['Work Sans']">Current Tab</div>
                            </div>
                        </div>
                        <div className="w-64 pl-4 pr-3 py-3 rounded-xl border border-indigo-950 justify-between items-center inline-flex">
                            <div className="justify-start items-center gap-2 flex">
                                <div className="w-5 h-5 justify-center items-center flex">
                                    <div className="w-5 h-5 relative">
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-1 flex">
                                    <div className="text-indigo-950 text-sm font-medium font-['Work Sans']">Camera</div>
                                </div>
                            </div>
                            <div className="w-9 h-5 p-0.5 bg-indigo-950 rounded-xl justify-end items-center flex">
                                <div className="w-4 h-4 bg-white rounded-full shadow" />
                            </div>
                        </div>
                        <div className="w-64 pl-4 pr-3 py-3 rounded-xl border border-indigo-950 justify-start items-center gap-32 inline-flex">
                            <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                <div className="w-5 h-5 justify-center items-center flex">
                                    <div className="w-5 h-5 relative">
                                    </div>
                                </div>
                                <div className="grow shrink basis-0 h-5 justify-between items-center flex">
                                    <div className="text-indigo-950 text-sm font-medium font-['Work Sans']">Audio </div>
                                    <div className="w-9 h-5 p-0.5 bg-indigo-950 rounded-xl justify-end items-center flex">
                                        <div className="w-4 h-4 bg-white rounded-full shadow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-64 h-12 flex-col justify-center items-center flex">
                        <div className="self-stretch h-12 flex-col justify-center items-center gap-3 flex">
                            <div className="self-stretch p-4 bg-indigo-950 rounded-xl justify-center items-center gap-2 inline-flex">
                                <div className="text-teal-100 text-base font-medium font-['Work Sans']">Start Recording</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-96 h-80 flex-col justify-start items-center gap-8 inline-flex">
                <div className="w-32 h-32 relative">
                    <div className="w-32 h-32 left-[-0px] top-[-0.57px] absolute">
                    </div>
                </div>
                <div className="flex-col justify-center items-center gap-5 flex">
                    <div className="justify-center items-center gap-2.5 inline-flex">
                        <div><img src={bigIcon} alt="" /></div>
                        <div className="text-black text-5xl font-semibold font-['Sora']">HelpMeOut</div>
                    </div>
                    <div className="w-96 justify-center items-center gap-2.5 inline-flex">
                        <div className="grow shrink basis-0 text-center text-neutral-900 text-2xl font-normal font-['Sora']">Help out by creating videos on how to get things done and sending out instantly</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Helptwo