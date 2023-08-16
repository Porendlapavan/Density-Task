import React, { useRef, useState } from 'react';
import Motionpath from './motionpath'
import './improvement.css'
export default function Improvement(){
    const divRef=useRef(null)
    const [highlight,setlight]=useState(0);
    function scrolled(){
        const scrollpos=(divRef.current.scrollHeight-300)/5;
        setlight(Math.floor(divRef.current.scrollTop/scrollpos));
        console.log(Math.floor(divRef.current.scrollTop/scrollpos));
    }
    return(
        <div >
            <div className="flex">
                <div data-aos="zoom-in-right" data-aos-duration="1500" >
                        <h1 className="text-1xl  pl-6 m-0">  wrong with self-improvement & how we are fixing it</h1>
                        <h1 className="text-4xl font-bold p-6 m-0">
                            Self improvement.Ugh.
                        </h1>
                </div>
            <Motionpath path="M 1686.688 843.553 C 1579.062 739.417 1371.787 913.831 1255.071 824.968" dimention={0.5}/>
            </div>
            
            <div className="p-10 m-auto pl-15 w-[80%]" onScroll={scrolled} ref={divRef} style={{height:"300px",overflow:"hidden", overflowY:"scroll"}}>
                <ul className='lineadding'>
                    <li style={{filter:(highlight == 0 ? "none" : 'blur(0.75px)')}}><h1 className='text-1xl font-bold'>it's not a easy as 1-2-3.</h1>
                    <p className='p-2'>The journey of change may be long,but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).</p></li>
                    
                    <li style={{filter:(highlight == 1 ? "none" : 'blur(0.75px)')}}><h1 className='text-1xl font-bold'>you and your motivation don't have a long-term relationship.</h1>
                    <p className='p-2'>The journey of change may be long,but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).</p>
                    </li>

                    <li style={{filter:(highlight == 2 ? "none" : 'blur(0.75px)')}}><h1 className='text-1xl font-bold'>you and your motivation don't have a long-term relationship.</h1>
                    <p className='p-2'>The journey of change may be long,but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).</p>
                    </li>
                    <li style={{filter:(highlight == 3 ? "none" : 'blur(0.75px)')}}><h1 className='text-1xl font-bold'>it's not a easy as 1-2-3.</h1>
                    <p className='p-2'>The journey of change may be long,but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).</p></li>
                    
                    <li style={{filter:(highlight == 4 ? "none" : 'blur(0.75px)')}}><h1 className='text-1xl font-bold'>it's not a easy as 1-2-3.</h1>
                    <p className='p-2'>The journey of change may be long,but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).</p></li>
                </ul>
            </div>
        </div>
    )
}