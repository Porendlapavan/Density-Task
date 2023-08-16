import React from 'react'
import Logo from '../Images/pack-man_motion.png'
import './rotate.css'

export default function work(){
    return (
        <div className='pl-10 bg-[#F3F1FF] rounded-3xl w-[90%] m-auto flex'>
            <div className='space-y-5 w-3/ py-10'>
                <h1 data-aos="fade-right" data-aos-duration="1500" className="text-3xl p-4 font-black mb-10">
                    Work With Us
                </h1>
                <div data-aos="fade-right" data-aos-duration="1500" className='shadow-xl  bg-white rounded-2xl '>
                    <div className='p-10 space-y-4'>
                        <img  className="pendulum w-10 my-6" src={Logo}/>
                        <h1 className='font-bold'>
                            About us
                        </h1>
                        <p className="text-base text-gray-700 tracking-wide">
                            At ahead our goal is to make self-
                            improvement fun and lasting. we know there's
                            a way how to make it work. And that's what 
                            aHead is all about
                        </p>
                    </div>
                    <div className="rounded-2xl bg-[#FEF6F0] p-10 space-y-4">
                        <h1 className="font-extrabold text-xl">Product</h1>
                        <p className="text-base text-gray tracking-wide">
                        sure you could spend ages reading books or sitting in seminara on how to become a better  spouse,parent, or manager-we did...
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end space-y-3 p-10">
                <h1 data-aos="fade-left" data-aos-duration="1500" className='font-bold text-3xl text-cyan-500 mb-10'>ahead</h1>
                <div
                data-aos="fade-up"
                className="space-y-4 items-end flex flex-col h-96 overflow-y-scroll no-scrollbar bg-scroll-blue-500"
                >
                   <div className="bg-white rounded-2xl p-5 w-2/3 mr-20 flex flex-col space-y-4">
                        <h1 className="font-bold">"Power through, even when the going gets tough</h1>
                        <p>We help you spot and work around whatever stands in the way, be bad
                            habits, fear, etc.</p>
                    </div>
                   <div className="bg-white rounded-2xl p-5 w-2/3 mr-20 flex flex-col space-y-4">
                        <h1 className="font-bold">"Power through, even when the going gets tough</h1>
                        <p>We help you spot and work around whatever stands in the way, be bad
                            habits, fear, etc.</p>
                    </div>
                    <div className="bg-white rounded-2xl p-5 w-2/3 mr-20 flex flex-col space-y-4">
                        <h1 className="font-bold">"Power through, even when the going gets tough</h1>
                        <p>We help you spot and work around whatever stands in the way, be bad
                            habits, fear, etc.</p>
                    </div>
                    <div className="bg-white rounded-2xl p-5 w-2/3 mr-20 flex flex-col space-y-4">
                        <h1 className="font-bold">"Power through, even when the going gets tough</h1>
                        <p>We help you spot and work around whatever stands in the way, be bad
                            habits, fear, etc.</p>
                    </div>
                    <div className="bg-white rounded-2xl p-5 w-2/3 mr-20 flex flex-col space-y-4">
                        <h1 className="font-bold">"Power through, even when the going gets tough</h1>
                        <p>We help you spot and work around whatever stands in the way, be bad
                            habits, fear, etc.</p>
                    </div>
                    <div className="bg-white rounded-2xl p-5 w-2/3 mr-20 flex flex-col space-y-4">
                        <h1 className="font-bold">"Power through, even when the going gets tough</h1>
                        <p>We help you spot and work around whatever stands in the way, be bad
                            habits, fear, etc.</p>
                    </div>
                    <div className="bg-white rounded-2xl p-5 w-2/3 mr-20 flex flex-col space-y-4">
                        <h1 className="font-bold">"Power through, even when the going gets tough</h1>
                        <p>We help you spot and work around whatever stands in the way, be bad
                            habits, fear, etc.</p>
                    </div>
                    <div className="bg-white rounded-2xl p-5 w-2/3 mr-20 flex flex-col space-y-4">
                        <h1 className="font-bold">"Power through, even when the going gets tough</h1>
                        <p>We help you spot and work around whatever stands in the way, be bad
                            habits, fear, etc.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
