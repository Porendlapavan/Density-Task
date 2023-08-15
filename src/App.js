import React from 'react';
import Navbar from './components/Navbar';
import Firstbox from './components/Firstbox';
import Fourthbox from './components/Fourthbox';
import Meetapp from './components/Meetapp'
import Sixthbox from './components/Sixthbox';
import Feature from './components/Features';
import Test from './components/Test';
import Work from './components/Work';
import Job from './components/Job';
import Footer from './components/Footer';



export default function App()
{
    return (
       <div className='container'>
            <Navbar />
            <div style={{height:"100px"}}></div>
            <Firstbox />
            <Fourthbox/>
            <Meetapp />
            <Sixthbox />
            <Feature />
            <Test />
            <Work />
            <Job/>
            <Footer />
       </div>
    )
}