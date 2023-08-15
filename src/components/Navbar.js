import React from 'react'
import Logo from '../Images/favicon.ico'
export default function Navbar(){
    return(
        <nav className='container'>
            <img src={Logo}/>
            <ul className='nav-items'>
                <li>Emotions</li>
                <li>Manifesto</li>
                <li>Self-awareness test</li>
                <li>Work With Us</li>
            </ul>
            <button className='buttons'>Download app</button>
        </nav>
    )
}