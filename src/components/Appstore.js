import React from 'react';
import AppleIcon from '@mui/icons-material/Apple';

export default function Appstore(){
    return(
        <button className='Applebutton'>
            <div>
                <AppleIcon/>
                <div className='Applebutton--matter'>
                    <p>Download on the</p>
                    <h6>App store</h6>
                </div>
            </div>
        </button>
    )
}