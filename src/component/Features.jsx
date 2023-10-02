import React from 'react'
import circle from '../assets/record-circle.png'
import send from '../assets/send-2.png'
import square from '../assets/refresh-square-2.png'
import video from '../assets/VideoRepository.png'

const Features = () => {
    return (
        <div className='m-24' >
            <div>
                <h1 className="text-center text-neutral-900 text-4xl font-bold font-['Sora']" >Features</h1>
                <h3 className="text-center text-zinc-600 text-xl font-normal font-['Work Sans'] leading-loose" >Key Highlights of Our Extension</h3>
            </div>

            <div className='flex gap-5 mt-12' >
            <div className='' >

                <div className='flex gap-5' >
                    <div>
                        <img className='bg-slate-800' src={circle} alt='' />
                    </div>
                    <div>
                        <h3 className="text-slate-800 text-3xl font-semibold font-['Inter']" >Simple screen Recording</h3>
                        <p className="text-zinc-600 text-xl font-normal font-['Work Sans'] leading-loose" >Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                    </div>
                </div>

                <div className='flex gap-5' >
                    <div>
                        <img className='bg-slate-800' src={send} alt='' />
                    </div>
                    <div>
                        <h3 className="text-slate-800 text-3xl font-semibold font-['Inter']" >Easy-to-Share URL</h3>
                        <p className="text-zinc-600 text-xl font-normal font-['Work Sans'] leading-loose" >Share your recordings instantly with a single link. No attachments, no downloads.</p>
                    </div>
                </div>

                <div className='flex gap-5' >
                    <div>
                        <img className='bg-slate-800' src={square} alt='' />
                    </div>
                    <div>
                        <h3 className="text-slate-800 text-3xl font-semibold font-['Inter']" >Revisit Recordings</h3>
                        <p className="text-zinc-600 text-xl font-normal font-['Work Sans'] leading-loose" >Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
                    </div>
                </div>
            </div>

            <div>
                <img src={video} alt="" />
            </div>
            </div>


            {/* <div className="Features w-96 h-96 py-20 bg-white flex-col justify-center items-center gap-16 inline-flex mt-80 ">
  <div className="Header h-20 flex-col justify-center items-center gap-2 flex">
    <div className="Headline self-stretch text-center text-neutral-900 text-4xl font-bold font-['Sora']">Features</div>
    <div className="Subtitle self-stretch text-center text-zinc-600 text-xl font-normal font-['Work Sans'] leading-loose">Key Highlights of Our Extension</div>
  </div>
  <div className="Content w-96 justify-start items-center gap-14 inline-flex">
    <div className="Check w-96 self-stretch flex-col justify-start items-start gap-12 inline-flex">
      <div className="Check self-stretch justify-start items-start gap-4 inline-flex">
        <div className="IconPlaceholder p-2 bg-slate-600 rounded-3xl justify-center items-center flex">
          <div className="VuesaxBoldRecordCircle w-8 h-8 justify-center items-center flex">
            <div className="RecordCircle w-8 h-8 relative">
            </div>
          </div>
        </div>
        <div className="Container grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
          <div className="ParagraphContainer self-stretch h-24 flex-col justify-start items-start gap-2 flex">
            <div className="SimpleScreenRecording self-stretch text-slate-800 text-3xl font-semibold font-['Inter']">Simple Screen Recording</div>
            <div className="EffortlessScreenRecordingForEveryoneRecordWithEaseNoTechExpertiseRequired self-stretch text-zinc-600 text-xl font-normal font-['Work Sans'] leading-loose">Effortless screen recording for everyone. Record with ease, no tech expertise required.</div>
          </div>
        </div>
      </div>
      <div className="Check self-stretch justify-start items-start gap-4 inline-flex">
        <div className="IconPlaceholder p-2 bg-slate-600 rounded-3xl justify-center items-center flex">
          <div className="VuesaxBoldSend2 w-8 h-8 justify-center items-center flex">
            <div className="Send2 w-8 h-8 relative">
            </div>
          </div>
        </div>
        <div className="Container grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
          <div className="ParagraphContainer self-stretch h-24 flex-col justify-start items-start gap-2 flex">
            <div className="EasyToShareUrl self-stretch text-slate-800 text-3xl font-semibold font-['Inter']">Easy-to-Share URL</div>
            <div className="ShareYourRecordingsInstantlyWithASingleLinkNoAttachmentsNoDownloads self-stretch text-zinc-600 text-xl font-normal font-['Work Sans'] leading-loose">Share your recordings instantly with a single link. No attachments, no downloads.</div>
          </div>
        </div>
      </div>
      <div className="Check self-stretch justify-start items-start gap-4 inline-flex">
        <div className="IconPlaceholder p-2 bg-slate-600 rounded-3xl justify-center items-center flex">
          <div className="VuesaxBoldRefreshSquare2 w-8 h-8 justify-center items-center flex">
            <div className="RefreshSquare2 w-8 h-8 relative">
            </div>
          </div>
        </div>
        <div className="Container grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
          <div className="ParagraphContainer self-stretch h-24 flex-col justify-start items-start gap-2 flex">
            <div className="RevisitRecordings self-stretch text-slate-800 text-3xl font-semibold font-['Inter']">Revisit Recordings</div>
            <div className="AccessAndReviewYourPastContentEffortlesslyYourRecordingsAlwaysAtYourFingertips self-stretch text-zinc-600 text-xl font-normal font-['Work Sans'] leading-loose">Access and review your past content effortlessly. Your recordings, always at your fingertips.</div>
          </div>
        </div>
      </div>
    </div>
    <img className="VideoRepository w-96 h-96 rounded-lg" src="https://via.placeholder.com/636x454" />
  </div>
</div> */}
        </div>
    )
}

export default Features