import React from 'react'
import icon from '../assets/iCON 7 1.svg'
import john from '../assets/Frame 1000002577.png'

const Helpmeout = () => {
  return (
    <div>
    <div className='flex justify-between m-4' >
        <div className='flex gap-2' >
            <img src={icon} alt="" className='w-[40px]' srcset="" />
            <h5>Helpmeout</h5>
        </div>

        <div>
            <img src={john} alt="" srcset="" />
        </div>
    </div>

    <div>
        <div>
        <h1>Hello John Mark</h1>
        <p>Here are your recorded videos</p>
        </div>

        <div>
            <input type="text" name="" id="" placeholder='search for a particular video here' className='border p-2 w-[280px] rounded' />
        </div>
    </div>
    </div>
  )
}

export default Helpmeout
