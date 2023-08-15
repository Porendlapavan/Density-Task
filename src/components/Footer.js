import React from 'react'
import Logo from '../Images/favicon.ico'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright'

import Appstore from './Appstore'
export default function Footer(){
    return (
        <footer>
            <a href="#"> <img src={Logo}/></a>
            <h1>ahead</h1>
            <div className='icons-align'>
                <div>
                    <p><LocationOnIcon sx={{borderRadius:"50%",backgroundColor:"#76b5c5",fontSize: 25,marginRight:"4px",padding:"2px;"}}/>AugustraBe 26, 10117 Berlin</p>
                </div>
                <div>
                    <p><EmailIcon sx={{borderRadius:"50%",backgroundColor:"#76b5c5",fontSize: 25,marginRight:"4px",padding:"3px"}}/> hi@ahead-app.com</p>
                </div>
            </div> 
            <Appstore />
            <p><CopyrightIcon sx={{ fontSize: 13,alignItems:'end',paddingRight:'4px',alignSelf:"baseline"}} />2022 aheadapp. All rights reserved</p>
        </footer>
    )
}