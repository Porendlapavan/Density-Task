import React from 'react'
import Logo from '../Images/pack-man_motion.png'
export default function Meetapp()
{
    return(
        <div className='bg-[#fef6f0] p-7 my-20 rounded-3xl py-20'>
            <div data-aos="zoom-in-right" data-aos-duration="1300" className="space-y-6 ml-20 tracking-widest mb-18">
                    <p className="text-1xl">Built out of frustation</p>
                    <h1 className="text-2xl font-bold ">Meet the ahead app</h1>
            </div>
            
            <div className="grid grid-cols-2">
                <div className="flex items-center justify-center">
                {/* <Image src={homeowl} alt="home owl" className="w-56 " /> */}
                <img src={Logo} className='w-40'/>
                </div>
                <div data-aos="zoom-in-right" data-aos-duration="1500" className=" text-gray-500 text-lg tracking-wide font-medium px-20 z-0">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                    ever since the 1500s
                    <br />
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                    ever since the 1500s,
                </p>
                </div>
            </div>
        </div>
    )
}