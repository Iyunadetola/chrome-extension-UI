import React from 'react'
import icon from '../assets/iCON 7 1.svg'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='' >
            <div className="Frame1000002579  h-20 px-24 py-3 bg-white justify-center items-center gap-64 inline-flex">
                <div className="Frame1000002580 p-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="Frame246 justify-start items-center gap-2.5 inline-flex">
                        <div className="Frame1000002536 justify-start items-center gap-2 flex">
                            <div className="Icon71 w-10 h-10 relative">
                                <img src={icon} alt="" />
                                <div className="Layer1 w-10 h-10 left-[-0px] top-[-0.17px] absolute">
                                </div>
                            </div>
                            <Link to='/helpmeout' >
                            <div className="Helpmeout text-indigo-950 text-base font-bold font-['Inter']">HelpMeOut</div></Link>
                        </div>
                    </div>
                </div>
                <div className="Frame1000002468 px-5 py-2.5 justify-center items-start gap-10 flex">
                    <div className="Frame17 self-stretch justify-start items-start gap-12 inline-flex">
                        <div className="Features text-black text-base font-medium font-['Work Sans']">Features</div>
                    </div>
                    <div className="Frame4596 self-stretch justify-start items-start gap-12 inline-flex">
                        <div className="HowItWorks text-black text-base font-medium font-['Work Sans']">How It Works</div>
                    </div>
                </div>
                <div className="Frame1000002578 px-2.5 py-3 rounded border-indigo-950 flex-col justify-center items-center gap-2.5 inline-flex">
                    
                    <div className="Frame14 justify-start items-center gap-5 inline-flex">
                        <Link to='/login' > 
                        <div className="Frame13 justify-start items-center gap-2.5 flex">
                            <div className="GetStarted text-center text-indigo-950 text-lg font-semibold font-['Sora']">Get Started</div>
                        </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar