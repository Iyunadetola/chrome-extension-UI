import React from 'react'
import icon from '../assets/iCON 7.png'

const Footer = () => {
  return (
    <div>
        <div className="Frame1000002614 w-full h-80 px-32 py-24 bg-indigo-950 justify-start items-start gap-10 inline-flex">
  <div className="Frame1000002580 p-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
    <div className="Frame246 justify-start items-center gap-2.5 inline-flex">
      <div className="Frame1000002536 justify-start items-center gap-2 flex">
        <div className="Icon71 w-10 h-10 relative">
            <img src={icon} bg-white alt="" />
          <div className="Layer1 w-10 h-10 left-[-0px] top-[-0.17px] absolute">
          </div>
        </div>
        <div className="Helpmeout text-white text-base font-bold font-['Inter']">HelpMeOut</div>
      </div>
    </div>
  </div>
  <div className="Frame42 justify-start items-start gap-56 flex">
    <div className="Frame38 flex-col justify-start items-start gap-6 inline-flex">
      <div className="Menu text-white text-base font-semibold font-['Sora']">Menu</div>
      <div className="Frame36 flex-col justify-start items-start gap-6 flex">
        <div className="LinkHome text-white text-base font-normal font-['Work Sans']">Home</div>
        <div className="LinkConverter text-white text-base font-normal font-['Work Sans']">Converter</div>
        <div className="LinkHowItWorks text-white text-base font-normal font-['Work Sans']">How it Works</div>
      </div>
    </div>
    <div className="Frame40 flex-col justify-start items-start gap-6 inline-flex">
      <div className="AboutUs text-white text-base font-semibold font-['Sora']">About us</div>
      <div className="Frame39 flex-col justify-start items-start gap-6 flex">
        <div className="LinkAbout text-white text-base font-normal font-['Work Sans']">About</div>
        <div className="LinkContactUs text-white text-base font-normal font-['Work Sans']">Contact Us</div>
        <div className="LinkPrivacyPolicy text-white text-base font-normal font-['Work Sans']">Privacy Policy</div>
      </div>
    </div>
    <div className="Frame41 flex-col justify-start items-start gap-6 inline-flex">
      <div className="ScreenRecord text-white text-base font-semibold font-['Sora']">Screen Record</div>
      <div className="Frame37 flex-col justify-start items-start gap-6 flex">
        <div className="BrowserWindow text-white text-base font-normal font-['Work Sans']">Browser Window</div>
        <div className="Desktop text-white text-base font-normal font-['Work Sans']">Desktop</div>
        <div className="Application text-white text-base font-normal font-['Work Sans']">Application</div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Footer