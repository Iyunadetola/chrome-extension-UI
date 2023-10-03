import React from 'react'
import logo from '../assets/Frame 1000002580 (1).svg'

const Footer = () => {
  return (
    <div className='' >
      <br />
      <br /><br /> <br /> <br /> <br /> <br />
      <div className="Frame1000002614 md:px-32 bg-indigo-950 justify-start text-white items-start md:gap-10 md:inline-flex w-full">
        <div className="Frame1000002580 flex-col justify-start items-start gap-2.5 inline-flex">
          <img src={logo} alt="" srcset="" />
        </div>
        <ul>
        <li className="text-white text-base font-semibold font-['Sora']" >Menu</li>
        <li className="text-white text-base font-normal font-['Work Sans']" >Home</li>
        <li className="text-white text-base font-normal font-['Work Sans']" >Converter</li>
        <li className="text-white text-base font-normal font-['Work Sans']" >How it works</li>
      </ul>


      <ul>
        <li className="text-white text-base font-semibold font-['Sora']" >About us</li>
        <li className="text-white text-base font-normal font-['Work Sans']" >About</li>
        <li className="text-white text-base font-normal font-['Work Sans']" >Contact Us</li>
        <li className="text-white text-base font-normal font-['Work Sans']" >Privacy Policy</li>
      </ul>


      <ul>
        <li className="text-white text-base font-semibold font-['Sora']" >Screen Record</li>
        <li className="text-white text-base font-normal font-['Work Sans']" >Browser Window</li>
        <li className="text-white text-base font-normal font-['Work Sans']" >Desktop</li>
        <li className="text-white text-base font-normal font-['Work Sans']" >Application</li>
      </ul>
      </div>
    </div>

  )
}

export default Footer