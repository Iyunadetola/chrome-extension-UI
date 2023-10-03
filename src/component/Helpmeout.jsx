import React from 'react'
import icon from '../assets/iCON 7 1.svg'
import john from '../assets/Frame 1000002577.png'
import img1 from '../assets/WEB CARD.png'
import img2 from '../assets/WEB CARD (1).png'
import img3 from '../assets/WEB CARD (2).png'
import img4 from '../assets/WEB CARD (3).png'
import logo from '../assets/Frame 1000002580.svg'
import { Link } from 'react-router-dom'

const Helpmeout = () => {
  return (
    <div className='m-4' >
    <div className='flex justify-between m-4' >
        <Link to='/' >
        <div className='' >
            <img src={logo} alt="" srcset="" />
        </div>
        </Link>

        <div>
            <img src={john} alt="" srcset="" />
        </div>
    </div>

    <div className='flex justify-between m-4 mt-10' >
        <div className='' >
        <h1 className="text-neutral-900 text-3xl font-bold font-['Sora']" >Hello John Mark</h1>
        <p className="text-neutral-900 text-opacity-70 text-lg font-normal font-['Work Sans']" >Here are your recorded videos</p>
        </div>

        <div>
            <input type="text" name="" id="" placeholder='search for a particular video here' className='border p-2 w-[280px] rounded' />
        </div>
    </div>

    <div className='m-4' >
        <h2 className="mt-16 text-neutral-900 text-opacity-80 text-lg font-medium font-['Work Sans']" >Recent Files</h2>
        <div className='flex gap-8 m-4' >
            <img src={img1} alt="" srcset="" />
            <img src={img2} alt="" srcset="" />
        </div>
    </div>

    <div>
        <h2 className="m-4 text-neutral-900 text-opacity-80 text-lg font-medium font-['Work Sans']" >Files from last week</h2>
        <div className='flex gap-8 m-4' >
            <img src={img3} alt="" srcset="" />
            <img src={img4} alt="" srcset="" />

        </div>
    </div>
    </div>
  )
}

export default Helpmeout
