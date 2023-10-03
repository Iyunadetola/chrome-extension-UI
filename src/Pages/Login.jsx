import React from 'react'
import logo from '../assets/Frame 1000002580.svg'
import fb from '../assets/Facebook svg.png'
import google from '../assets/Google svg.png'
import or from '../assets/Frame 203.png'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div >
            <div>
                <Link to='/' >
                <div className="Frame4615 w-36 h-10 gap-2 flex">
                    <img src={logo} alt="" srcset="" />
                </div>
                </Link>
            </div>

            <div className="mx-auto" >
                <div className='items-center' >
                <h1 className="text-neutral-900 text-3xl font-bold font-['Inter'] leading-[48px] tracking-tight text-center " >Login or Sign Up</h1>
                <p className="w-80 mx-auto text-center text-neutral-700 text-sm font-normal font-['Sen'] leading-5 tracking-tight py-4 " >Join millions of others in sharing successful moves on HelpMeOut.</p>
                </div>
                <div>
                    <div className="md:px-[123px] sm:px-0 md:w-[30rem] md:py-[3px] mx-auto bg-white rounded-xl border border-neutral-900 items-center" >
                        <div className="ContinueWithGoogle text-neutral-900 text-base md:font-medium sm:font-light font-['Inter'] leading-normal tracking-tight inline-flex gap-5 ">
                            <img src={google} alt="" />
                            Continue with Google</div>
                    </div>
                    <br />
                    <div className="md:px-[123px] sm:px-0 md:w-[30rem] py-0.5 mx-auto bg-white rounded-xl border border-neutral-900 justify-end items-center" >
                        <div className="ContinueWithGoogle text-neutral-900 text-base font-medium font-['Inter'] leading-normal tracking-tight inline-flex gap-5 ">
                            <img src={fb} alt="" />
                            Continue with Facebook</div>
                    </div>

                    <img  className="pt-[30px] px-4 mx-auto " src={or} alt="" />

                    <div className='grid justify-center' >
                        <form action="" className='py-1 ' >Email</form>
                        <input className="text-neutral-900 text-sm font-medium  font-['Work Sans'] p-2 md:w-[30rem] rounded-xl border border-gray-400   " type="email" name="email" id="" placeholder='Enter your email address' />
                    </div>
                    <div className=' grid justify-center  ' >
                        <form action="" className='py-1 ' >Password</form>
                        <input className="md:px-[123px] sm:px-0 md:w-[30rem] py-0.5 mx-auto bg-white rounded-xl border border-neutral-900  " type="password" name="password" id="" placeholder='Enter your password' />
                    </div>

                    <div className='py-6 ' >
                        <h4 className="h-14 px-5 py-4 bg-indigo-950 rounded-lg mx-auto md:w-[30rem] sm:w-fit items-center gap-2.5 text-center text-slate-50 text-lg font-medium font-['Work Sans'] " >Sign Up</h4>
                    </div>
                </div>



            </div>

            


        </div>
    )
}

export default Login