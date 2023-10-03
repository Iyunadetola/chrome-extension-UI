import React from 'react'
import screenrecord from '../assets/skeleton.png'

const Howitwork = () => {
    return (
        <div className='md:flex sm:block m-24' >
            <div>
                <div className="Frame1000002590 flex-col justify-start items-center gap-8 inline-flex">
                    <div className="Icon px-6 py-3.5 bg-indigo-950 rounded-3xl flex-col justify-center items-center gap-2.5 flex">
                        <div className=" text-center text-white md:text-3xl sm:text-lg font-bold font-['Inter']">1</div>
                    </div>
                    <div className="Frame29 flex-col justify-center items-center gap-4 flex">
                        <div className="Heading5 flex-col justify-start items-center flex">
                            <div className="RecordScreen text-slate-800 md:text-3xl sm:text-lg font-semibold font-['Inter']">Record Screen</div>
                        </div>
                        <div className="ClickTheStartRecordingButtonInOurExtensionChooseWhichPartOfYourScreenToCaptureAndWhoYouWantToSendItTo text-center text-zinc-600 md:text-xl sm:text-sm sm:w-full font-normal font-['Work Sans'] leading-loose">Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</div>
                    </div>
                </div>
                <img className='' src={screenrecord} alt='' />
            </div>

            <div className="Frame1000002590 flex-col justify-start items-center gap-4 inline-flex">
                <div className="Icon px-6 py-3.5 bg-indigo-950 rounded-3xl flex-col justify-center items-center gap-2.5 flex">
                    <div className=" text-center text-white md:text-3xl sm:text-lg  font-bold font-['Inter']">2</div>
                </div>
                <div className="Frame29 flex-col justify-center items-center gap-4 flex">
                    <div className="Heading5 flex-col justify-start items-center ">
                        <div className="ShareYourRecording text-center text-slate-800 md:text-3xl sm:text-lg  font-semibold font-['Inter']">Share Your Recording</div>
                    </div>
                    <div className="WeGenerateAShareableLinkForYourVideoSimplySendItToYourAudienceViaEmailOrCopyTheLinkToSendViaAnyPlatform  text-center text-zinc-600 md:text-xl sm:text-sm sm:w-full font-normal font-['Work Sans'] leading-loose">We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</div>
                </div>
                <img className=' ' src={screenrecord} alt='' />

            </div>

            <div className="Frame1000002590 h-64 flex-col justify-start items-center gap-4 inline-flex">
                <div className="Icon h-16 px-6 py-3.5 bg-indigo-950 rounded-3xl flex-col justify-center items-center gap-2.5 flex">
                    <div className=" text-center text-white md:text-3xl sm:text-lg font-bold font-['Inter']">3</div>
                </div>
                <div className="Frame29 flex-col justify-center items-center gap-4 flex">
                    <div className="Heading5 flex-col justify-start items-center flex">
                        <div className="LearnEffortlessly text-center text-slate-800 md:text-3xl sm:text-lg font-semibold font-['Inter']">Learn Effortlessly</div>
                    </div>
                    <div className="RecipientsCanAccessYourVideoEffortlesslyThroughTheProvidedLinkWithOurUserFriendlyInterfaceSuitableForEveryone text-center text-zinc-60 md:text-xl sm:text-sm sm:w-full font-normal font-['Work Sans'] leading-loose">Recipients can access your video effortlessly through the provided link, with our user-friendly interface for everyone.</div>
                </div>
                <img className='' src={screenrecord} alt='' />

            </div>
        </div>


    )
}

export default Howitwork