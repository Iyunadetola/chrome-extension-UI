import React from 'react'

const Nav = () => {
    return (
        <div>
            <div className=" h-12 justify-start items-center gap-10 inline-flex">
                <div className="px-4 py-3 bg-white rounded-3xl shadow justify-center items-center gap-2.5 flex">
                    <div className="text-center text-sky-600 text-xl font-medium font-['Work Sans']">Overview</div>
                </div>
                <div className="h-6 justify-start items-end gap-10 flex">
                    <div className="grow shrink basis-0 h-6 justify-center items-center gap-2.5 flex">
                        <div className="grow shrink basis-0 text-zinc-600 text-xl font-medium font-['Work Sans']">Privacy practices</div>
                    </div>
                    <div className="h-6 justify-center items-center gap-2.5 flex">
                        <div className="text-zinc-600 text-xl font-medium font-['Work Sans']">Review</div>
                    </div>
                    <div className="h-6 justify-center items-center gap-2.5 flex">
                        <div className="text-zinc-600 text-xl font-medium font-['Work Sans']">Related</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav