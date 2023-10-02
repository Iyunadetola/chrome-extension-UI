import React from 'react'
import close from '../assets/close-circle.svg'
import videos from '../assets/video.png'
import audios from '../assets/microphone-2.png' 

const Wantsto = () => {
    return (
        <div>
            <div className="Permissions w-96 h-48 relative bg-white rounded-xl border-2 border-gray-200">
                <div className="Frame26 w-96 pl-96 pr-5 pt-3 pb-4 left-0 top-0 absolute border justify-end items-center inline-flex">
                    <div className="CloseCircle w-5 h-5 justify-center items-center inline-flex">
                        <div className="CloseCircle w-5 h-5 relative">
                            <img src={close} alt="" />
                        </div>
                    </div>
                </div>
                <div className="HelpmeoutWantsTo left-[16px] top-[13px] absolute text-neutral-900 text-lg font-normal font-['Inter']">HelpMeOut wants to</div>
                <div className="Frame34 left-[16px] top-[56px] absolute justify-start items-center gap-4 inline-flex">
                    <div className="Video w-6 h-6 justify-center items-center flex">
                        <div className="Video w-6 h-6 relative">
                            <img src={videos} alt="" />
                        </div>
                    </div>
                    <div className="UseYourCamera text-neutral-900 text-sm font-normal font-['Inter']">Use your camera</div>
                </div>
                <div className="Frame34 left-[16px] top-[96px] absolute justify-start items-center gap-4 inline-flex">
                    <div className="VuesaxOutlineMicrophone2 w-6 h-6 justify-center items-center flex">
                        <div className="Microphone2 w-6 h-6 relative">
                            <img src={audios} alt="" />
                        </div>
                    </div>
                    <div className="UseYourMicrophone text-neutral-900 text-sm font-normal font-['Inter']">Use your microphone</div>
                </div>
                <div className="Frame53 w-16 h-8 p-2.5 left-[232px] top-[152px] absolute rounded border border-neutral-900 justify-center items-center gap-2.5 inline-flex">
                    <div className="Allow text-neutral-900 text-sm font-medium font-['Inter']">Allow</div>
                </div>
                <div className="Frame52 w-16 h-8 p-2.5 left-[320px] top-[152px] absolute rounded border border-neutral-900 justify-center items-center gap-2.5 inline-flex">
                    <div className="Block text-neutral-900 text-sm font-medium font-['Inter']">Block</div>
                </div>
            </div>
        </div>
    )
}

export default Wantsto