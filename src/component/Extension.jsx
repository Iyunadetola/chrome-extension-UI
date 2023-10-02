import React from 'react'
import close from '../assets/close-circle.svg'
import icon from '../assets/iCON 7 1.svg'
import metamask from '../assets/logos_metamask-icon.svg'
import binance from '../assets/simple-icons_binance.svg'
import zoom from '../assets/logos_zoom-icon.svg'
import framer from '../assets/cib_framer.svg'
import settings from '../assets/setting-2.svg'
import pin from '../assets/push_pin.svg'
import vert from '../assets/more_vert.svg'

const Extension = () => {
    return (
        <div>
            <div className="w-96 h-96 relative bg-white">
                <div className="w-96 h-96 left-[895px] top-[113px] absolute bg-white rounded shadow border">
                    <div className="w-96 h-12 left-0 top-0 absolute border" />
                    <div className="h-12 px-4 left-0 top-[56px] absolute flex-col justify-start items-start gap-1 inline-flex">
                        <div className="text-neutral-900 text-xs font-semibold font-['Sora']">Full Access</div>
                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-zinc-600 text-sm font-normal font-['Work Sans']">These extensions can see and change information on this site </div>
                        </div>
                    </div>
                    <div className="left-[17px] top-[13px] absolute text-zinc-600 text-lg font-normal font-['Inter']">Extensions</div>


                    <div className="w-6 h-6 left-[360px] top-[12px] relative">
                        <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
                        <img src={close} className="Close w-6 h-6 relative bg-white " alt="" />
                    </div>

                    <div className="left-0 top-[109px] absolute flex-col justify-start items-start inline-flex">
                        <div className="w-96 h-12 relative border">
                        {/* <div > */}
                            <div className="w-6 h-6 left-[320px] top-[12px] absolute">
                                <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
                            <img className="PushPin w-6 h-6 relative bg-white " src={pin} alt="" />

                            </div>
                            <div className="w-6 h-6 left-[360px] top-[12px] absolute">
                                <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
                            <img className="PushPin w-6 h-6 relative bg-white " src={vert} alt="" />

                            </div>
                            <div className="left-[16px] top-[13px] absolute justify-start items-center gap-4 inline-flex">
                                <div className="w-5 h-5 relative">
                                    <div className="w-6 h-6 left-[-0px] top-[-0.10px] absolute">
                                    <img src={icon} alt="" />
                                    </div>
                                </div>
                                <div className="text-neutral-900 text-base font-medium font-['Work Sans']">HelpMeOut</div>
                            </div>
                        </div>
                        <div className="w-96 h-12 relative border">
                            <div className="w-6 h-6 left-[320px] top-[12px] absolute">
                                <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
                            <img className="PushPin w-6 h-6 relative bg-white " src={pin} alt="" />

                            </div>
                            <div className="w-6 h-6 left-[360px] top-[12px] absolute">
                                <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
                            <img className="PushPin w-6 h-6 relative bg-white " src={vert} alt="" />

                            </div>
                            <div className="left-[16px] top-[12.75px] absolute justify-start items-center gap-4 inline-flex">
                            <img className="w-6 h-6 relative" src={metamask} alt="" />
                                <div className="text-neutral-900 text-base font-normal font-['Work Sans']">MetaMask</div>
                            </div>
                        </div>
                        <div className="w-96 h-12 relative border">
                            <div className="w-6 h-6 left-[320px] top-[12px] absolute">
                                <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
                            <img className="PushPin w-6 h-6 relative bg-white " src={pin} alt="" />

                            </div>
                            <div className="w-6 h-6 left-[360px] top-[12px] absolute">
                                <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
                            <img className="PushPin w-6 h-6 relative bg-white " src={vert} alt="" />

                            </div>
                            <div className="left-[16px] top-[12px] absolute justify-start items-center gap-4 inline-flex">
                            <img className="w-6 h-6 py-px justify-center items-center flex"  src={binance} alt="" />
                                <div className="text-neutral-900 text-base font-normal font-['Work Sans']">Binance Wallet</div>
                            </div>
                        </div>
                        <div className="w-96 h-12 relative border">
                            <div className="w-6 h-6 left-[320px] top-[12px] absolute">
                                <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
                            <img className="PushPin w-6 h-6 relative bg-white " src={pin} alt="" />

                            </div>
                            <div className="w-6 h-6 left-[360px] top-[12px] absolute">
                                <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
                            <img className="PushPin w-6 h-6 relative bg-white " src={vert} alt="" />

                            </div>
                            <div className="left-[16px] top-[12px] absolute justify-start items-center gap-4 inline-flex">
                            <img className="w-6 h-6 relative"  src={zoom} alt="" />
                                <div className="text-neutral-900 text-base font-normal font-['Work Sans']">Zoom</div>
                            </div>
                        </div>
                        <div className="w-96 h-12 relative border">
                            <div className="w-6 h-6 left-[320px] top-[12px] absolute">
                                <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
                            <img className="PushPin w-6 h-6 relative bg-white " src={pin} alt="" />

                            </div>
                            <div className="w-6 h-6 left-[360px] top-[12px] absolute">
                                <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
                            <img className="PushPin w-6 h-6 relative bg-white " src={vert} alt="" />

                            </div>
                            <div className="left-[16px] top-[12px] absolute justify-start items-center gap-4 inline-flex">
                                <img className="w-6 h-6 relative" src={framer} alt="" />
                        
                                <div className="text-neutral-900 text-base font-normal font-['Work Sans']">Framer</div>
                            </div>
                        </div>
                    </div>
                    <div className="pl-4 pr-48 py-3 left-0 top-[356px] absolute border-t border-zinc-500 justify-start items-center inline-flex">
                        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                            <div className="w-6 h-6 justify-center items-center flex">
                                <img className="w-6 h-6 relative" src={settings} alt="" />
                                <div >
                                </div>
                            </div>
                            <div className="text-neutral-900 text-base font-normal font-['Work Sans']">Manage extensions</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Extension