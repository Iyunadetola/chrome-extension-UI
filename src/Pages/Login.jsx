import React from 'react'
import icon from '../assets/iCON 7 1.svg'
import fb from '../assets/Facebook svg.png'
import google from '../assets/Google svg.png'
import or from '../assets/Frame 203.png'

const Login = () => {
    return (
        <div>
            <div>
                <div className="Frame4615 w-36 h-10 justify-start items-center gap-2 inline-flex">
                    <div className="Frame1000002536 justify-start items-center gap-2 flex">
                        <div className="Icon71 w-10 h-10 relative">
                            <img src={icon} alt="" />
                            <div className="Layer1 w-10 h-10 left-[-0px] top-[-0.17px] absolute">
                            </div>
                        </div>
                        <div className="Helpmeout text-indigo-950 text-base font-bold font-['Inter']">HelpMeOut</div>
                    </div>
                </div>
            </div>

            <div className='w-[475px] mx-auto' >
                <div className='items-center' >
                <h1 className="text-neutral-900 text-3xl font-bold font-['Inter'] leading-[48px] tracking-tight text-center " >Login or Sign Up</h1>
                <p className="w-80 mx-auto text-center text-neutral-700 text-sm font-normal font-['Sen'] leading-5 tracking-tight py-4 " >Join millions of others in sharing successful moves on HelpMeOut.</p>
                </div>
                <div>
                    <div className="px-[123px] py-[3px] bg-white rounded-xl border border-neutral-900 items-center" >
                        <div className="ContinueWithGoogle text-neutral-900 text-base font-medium font-['Inter'] leading-normal tracking-tight inline-flex gap-5 ">
                            <img src={google} alt="" />
                            Continue with Google</div>
                    </div>
                    <br />
                    <div className="px-32 py-0.5 bg-white rounded-xl border border-neutral-900 justify-end items-center" >
                        <div className="ContinueWithGoogle text-neutral-900 text-base font-medium font-['Inter'] leading-normal tracking-tight inline-flex gap-5 ">
                            <img src={fb} alt="" />
                            Continue with Facebook</div>
                    </div>

                    <img  className="pt-[30px] px-4 " src={or} alt="" />

                    <div>
                        <form action="" className='py-1' >Email</form>
                        <input className="text-neutral-900 text-sm font-medium font-['Work Sans'] p-2 w-full rounded-xl border border-gray-400 justify-start items-center gap-2 h-12 " type="email" name="email" id="" placeholder='Enter your email address' />
                    </div>
                    <div className='' >
                        <form action="" className='py-1' >Password</form>
                        <input className="text-neutral-900 text-sm font-medium font-['Work Sans'] p-2 w-full rounded-xl border border-gray-400 justify-start items-center gap-2 h-12 " type="password" name="password" id="" placeholder='Enter your password' />
                    </div>

                    <div className='py-6' >
                        <h4 className="h-14 px-5 py-4 bg-indigo-950 rounded-lg flex-col justify-center items-center gap-2.5 text-center text-slate-50 text-lg font-medium font-['Work Sans'] " >Sign Up</h4>
                    </div>
                </div>



            </div>

            {/* <div className="Frame4614 w-96 h-96 flex-col justify-center items-center gap-8 inline-flex">
                <div className="Frame4613 flex-col justify-start items-center gap-2 flex">
                    <div className="LogInOrSignUp text-neutral-900 text-3xl font-bold font-['Inter'] leading-10 tracking-tight">Log in or Sign up</div>
                    <div className="JoinMillionsOfOthersInSharingSuccessfulMovesOnHelpmeout  "><span style="text-neutral-700 text-sm font-light font-['Inter'] leading-tight tracking-tight">Join millions of others in sharing successful moves on </span><span style="text-neutral-700 text-sm font-normal font-['Sen'] leading-tight tracking-tight">HelpMeOut</span><span style="text-neutral-700 text-sm font-light font-['Inter'] leading-tight tracking-tight">.</span></div>
                </div>
                <div className="Frame4612 flex-col justify-start items-start gap-6 flex">
                    <div className="Sso1 px-32 py-0.5 bg-white rounded-xl border border-neutral-900 justify-end items-center inline-flex">
                        <div className="Frame201 self-stretch px-2.5 py-2 justify-center items-center gap-4 inline-flex">
                            <div className="GoogleSvg w-6 h-6 relative" />
                            <div className="ContinueWithGoogle text-neutral-900 text-base font-medium font-['Inter'] leading-normal tracking-tight">Continue with Google</div>
                        </div>
                    </div>
                    <div className="Sso2 pl-32 pr-24 py-0.5 bg-white rounded-xl border border-neutral-900 justify-end items-center inline-flex">
                        <div className="Frame201 self-stretch px-2.5 py-2 justify-center items-center gap-4 inline-flex">
                            <div className="FacebookSvg w-6 h-6 relative">
                                <div className="G12 w-6 h-6 left-0 top-[24px] absolute">
                                </div>
                            </div>
                            <div className="ContinueWithFacebook text-neutral-900 text-base font-medium font-['Inter'] leading-normal tracking-tight">Continue with Facebook</div>
                        </div>
                    </div>
                </div>
                <div className="Frame203 justify-start items-center gap-0.5 inline-flex">
                    <div className="Frame202 px-2.5 py-0.5 flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="Or text-neutral-300 text-sm font-medium font-['Inter'] leading-tight tracking-tight">or</div>
                    </div>
                </div>
                <div className="Frame4611 flex-col justify-start items-start gap-4 flex">
                    <div className="Inputfield h-20 flex-col justify-start items-start gap-2 flex">
                        <div className="Baseinputfield self-stretch h-20 flex-col justify-start items-start gap-3 flex">
                            <div className="Title self-stretch text-neutral-900 text-sm font-medium font-['Work Sans']">Email</div>
                            <div className="Frame4606 self-stretch p-4 rounded-xl border border-gray-400 justify-start items-center gap-2 inline-flex">
                                <div className="InputTextHere grow shrink basis-0 text-zinc-600 text-base font-medium font-['Work Sans']">Enter your email address</div>
                            </div>
                        </div>
                    </div>
                    <div className="Inputfield h-20 flex-col justify-start items-start gap-2 flex">
                        <div className="Baseinputfield self-stretch h-20 flex-col justify-start items-start gap-3 flex">
                            <div className="Title self-stretch text-neutral-900 text-sm font-medium font-['Work Sans']">Password</div>
                            <div className="Frame4606 self-stretch p-4 rounded-xl border border-gray-400 justify-start items-center gap-2 inline-flex">
                                <div className="InputTextHere grow shrink basis-0 text-zinc-600 text-base font-medium font-['Work Sans']">Enter your Password</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Frame15 self-stretch h-14 px-5 py-4 bg-indigo-950 rounded-lg flex-col justify-center items-center gap-2.5 flex">
                    <div className="Frame14 justify-start items-center gap-5 inline-flex">
                        <div className="Frame13 justify-start items-center gap-2.5 flex">
                            <div className="SignUp text-center text-slate-50 text-lg font-medium font-['Work Sans']">Sign Up</div>
                        </div>
                    </div>
                </div>
            </div> */}


        </div>
    )
}

export default Login