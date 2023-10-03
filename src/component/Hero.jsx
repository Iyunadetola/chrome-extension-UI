import React from 'react'
import img1 from '../assets/Frame 1000002595.png'
import img2 from '../assets/Frame 1000002596.png'
import img3 from '../assets/Frame 1000002597.png'
import img4 from '../assets/grid.136a9256d16888900db0.svg (1).png'
import img5 from '../assets/grid.136a9256d16888900db0.svg.png'
import arrow from '../assets/arrow-right.png'
import Container from './container/container'
import { Link } from 'react-router-dom'


const Hero = () => {
    return (
        <Container>
            <div className='flex flex-col py-[2rem] gap-[3rem] lg:flex-row lg:items-center lg:justify-between md:py-[4rem] ' >
                <div className="flex flex-col">
                    <div className="text-neutral-900 text-6xl font-bold font-['Sora'] leading-18 mb-6 " >
                        <h1 className='text-[38px] md:text-[60px] ' >Show Them <br />
                            Don't Just Tell</h1>
                    </div>
                    <p className="  text-black text-opacity-75 max-w-[548px] text-xl font-normal font-['Inter'] leading-7 mb-6 " >Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
                    <div className=' px-6 py-5 bg-indigo-950 w-max rounded-lg justify-center items-center gap-2 ' >
                        <Link to='/https://drive.google.com/drive/folders/1hI_FPU_ktO6EuiDMu5sqM1kOoLGalYlV' >
                        <button className=" flex items-center gap-[1rem] text-white text-lg font-medium font-['Work Sans']" >Install HelpMeOut
                        <img className='' src={arrow} alt='' />
                        </button>
                        </Link>
                    </div>
                </div>

                <div className='flex gap-4 ' >
                    <div className='flex relative flex-col gap-[10px]' >
                        <img src={img1} className="" alt="" />
                        <img className='' src={img2} alt="" />
                        <img className='absolute z-[-1] bottom-[-2rem] left-[-2rem]'  src={img4} alt="" />
                    </div>
                        <div className='relative' >
                        <img className='' src={img3} alt="" />
                        <img className='absolute z-[-1] top-[-2rem] right-[-1rem] md:right-[-3rem] '  src={img5} alt="" />
                        </div>
                </div>
            </div>
        </Container>
    )
}

export default Hero