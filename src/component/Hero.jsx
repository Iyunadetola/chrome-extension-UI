import React from 'react'
import img1 from '../assets/Frame 1000002595.png'
import img2 from '../assets/Frame 1000002596.png'
import img3 from '../assets/Frame 1000002597.png'
import img4 from '../assets/grid.136a9256d16888900db0.svg (1).png'
import img5 from '../assets/grid.136a9256d16888900db0.svg.png'
import arrow from '../assets/arrow-right.png'

const Hero = () => {
    return (
        <div className='mt-24 ' >
            <div className='flex' >
                <div className='m-24'>
                    <div className="text-neutral-900 text-6xl font-bold font-['Sora'] leading-18 mb-6 " >
                        <h1>Show Them <br/>
                        Don't Just Tell</h1>
                    </div>
                    <p className=" w-96 text-black text-opacity-75 text-xl font-normal font-['Inter'] leading-7 mb-6 " >Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
                    <div className='flex w-60 h-16 px-6 py-5 bg-indigo-950 rounded-lg justify-center items-center gap-2 ' >
                        <button className="text-white text-lg font-medium font-['Work Sans']" >Install HelpMeOut</button>
                        <img className=' w-5 h-5 ' src={arrow} alt='' />
                    </div>
                </div>

                <div className='flex m-24 gap-10' >
                    <div>
                        <img src={img1} className="w-96 h-56" alt="" />
                        <br />
                        <img className='relative w-96 h-56 ' src={img2} alt="" />
            
                        <img className='absolute z-[-1] bottom-[-79px] w-60 h-60 ' src={img4} alt="" />
                        

                    </div>
                    <div>
                    <img className='relative top-0 left-0 w-96 h-[464px] ' src={img3} alt="" />
                    <img className='absolute bottom-[245px] right-[56px] z-[-1] w-64 ' src={img5} alt="" />

                    </div>
                </div>


            </div>







            {/* <div className="HeroSection w-96 h-96 relative bg-white">
                <div className="TextButton left-[100px] top-[230px] absolute flex-col justify-start items-start gap-12 inline-flex">
                    <div className="Frame1000002581 flex-col justify-start items-start gap-5 flex">
                        <div className="Frame1000002582 justify-start items-start gap-2.5 inline-flex">
                            <div className="ShowThemDonTJustTell text-neutral-900 text-6xl font-bold font-['Sora'] leading-10">Show Them<br />Don’t Just Tell</div>
                        </div>
                        <div className="Frame1000002583 justify-start items-start gap-2.5 inline-flex">
                            <div className="HelpYourFriendsAndLovedOnesByCreatingAndSendingVideosOnHowToGetThingsDoneOnAWebsite w-96 text-black text-opacity-75 text-xl font-normal font-['Inter'] leading-7">Help your friends and loved ones by creating and sending videos on how to get things done on a website.</div>
                        </div>
                    </div>
                    <div className="Frame15 px-6 py-5 bg-indigo-950 rounded-lg flex-col justify-center items-center gap-2.5 flex">
                        <div className="Frame14 justify-center items-center gap-3 inline-flex">
                            <div className="Frame13 justify-start items-center gap-2.5 flex">
                                <div className="InstallHelpmeout text-center text-white text-lg font-medium font-['Work Sans']">Install HelpMeOut</div>
                            </div>
                            <div className="VuesaxLinearArrowRight w-5 h-5 justify-center items-center flex">
                                <div className="ArrowRight w-5 h-5 relative">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Grid136a9256d16888900db0Svg w-80 h-80 left-[1058.50px] top-[107px] absolute opacity-30" />
                <div className="Grid136a9256d16888900db0Svg w-80 h-80 left-[661.50px] top-[388px] absolute opacity-50" />
                <div className="Frame1000002595 w-80 h-52 left-[704px] top-[165px] absolute rounded-lg border-2 justify-center items-center inline-flex">
                    <img className="Adobestock4000530981 w-96 h-56" src={img1} />
                </div>
                <div className="Frame1000002596 w-80 h-52 left-[704px] top-[399px] absolute rounded-lg border-2 justify-center items-center inline-flex">
                    <img className="Adobestock3624976711 w-96 h-56 relative " src={img2} />
                    <img className='relative top-[3px]' src={img4} alt="" />
                </div>
                <div className="Frame1000002597 w-80 h-96 left-[1035px] top-[165px] absolute rounded-lg border-2 flex-col justify-center items-center inline-flex">
                    <div>
                        <img src={img3} className="WomanUsingSmartphoneTechnology2 w-80 h-[465px] bg-opacity-20 absolute top-[180px] " />
                        <img className='absolute left-12 top-[400px]' src={img5} alt="" />
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Hero