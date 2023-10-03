import React from 'react'
import circle from '../assets/record-circle.png'
import send from '../assets/send-2.png'
import square from '../assets/refresh-square-2.png'
import video from '../assets/VideoRepository.png'

const Features = () => {
  return (
    <div className='' >
      <div>
        <h1 className="text-center pt-10 text-neutral-900 md:text-4xl font-bold font-['Sora'] sm:text-lg mx-auto " >Features</h1>
        <h3 className="text-center text-zinc-600 md:text-xl sm:text-sm font-normal font-['Work Sans'] leading-loose" >Key Highlights of Our Extension</h3>
      </div>

      <div className='md:flex sm:block gap-5 mt-12 md:px-[2rem] w-full' >
        <div className='' >

          <div className='flex gap-5 ' >
            <div>
              <img className='bg-slate-800' src={circle} alt='' />
            </div>
            <div>
              <h3 className="text-slate-800 md:text-3xl sm:text-[3rem] font-semibold font-['Inter']" >Simple screen Recording</h3>
              <p className="text-zinc-600 md:text-xl  sm:text-[5px] font-normal font-['Work Sans'] " >Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
            </div>
          </div>

          <div className='flex gap-5' >
            <div>
              <img  className='bg-slate-800' src={send} alt='' />
            </div>
            <div>
              <h3 className="text-slate-800 md:text-3xl sm:text-[3rem] mt-2 font-semibold font-['Inter']" >Easy-to-Share URL</h3>
              <p className="text-zinc-600 md:text-xl  sm:text-[5px] font-normal mb-2 font-['Work Sans']" >Share your recordings instantly with a single link. No attachments, no downloads.</p>
            </div>
          </div>

          <div className='flex gap-5' >
            <div>
              <img className='bg-slate-800' src={square} alt='' />
            </div>
            <div>
              <h3 className="text-slate-800 md:text-3xl sm:text-[3rem] font-semibold font-['Inter']" >Revisit Recordings</h3>
              <p className="text-zinc-600 md:text-xl  sm:text-[5px] font-normal font-['Work Sans'] leading-loose" >Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
            </div>
          </div>
        </div>

        <div>
          <img src={video} alt=""  />
        </div>
      </div>



    </div>
  )
}

export default Features