import React from 'react' 
import flowerimage from '../Images/flowerline.jpg'
import animatefeature from '../Images/animatefeature.jpg'
export default function Feature(){
    return (
        <div className='p-20 bg-sky-50 my-20 items-center space-y-4 flex-col flex rounded-3xl'>
            <h1>
                Let your friends, family, and co-workers (anonymously) rate your social
                skills.
            </h1>
            <h1 className='text-4xl font-bolder'>
               Ever wondered what others think of you?
            </h1>
            <img src={flowerimage} style={{padding:"10px",margin:"10"}}/>
            <div className='flex items-center align-center '>
                <h1 data-aos="zoom-in-down" data-aos-duration="1500" className='align-center px-6 text-center'>Answer question on your social skills</h1>
                <h1 data-aos="zoom-in-down" data-aos-duration="1500" className='align-center px-6 text-center'>let others anonymously answer the same <br/> auestions about you</h1>
                <h1 data-aos="zoom-in-down" data-aos-duration="1500" className='align-center px-6 text-center'>let find out where you and other will see things<br/> the same way-and where not!</h1>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="1500">
                <img src={animatefeature}/>
            </div>
        </div>
    )
}