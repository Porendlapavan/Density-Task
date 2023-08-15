import React from 'react';
import Appstore from './Appstore'
import StarIcon from '@mui/icons-material/Star';
import mobile from '../Images/back_ground_mobile.png'
export default function Firstbox(){
    return (
        <div className='firstcard'>
            <div style={{width:"50%"}}>
                <h5>Ahead app</h5>
                <h1>Master your life by mastering emotions</h1>
                <div>
                    <Appstore />
                    <div>
                        <div>
                            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                        </div>
                        <p>100+ AppStore  reviews</p>
                    </div>
                </div>
            </div>
            <div >
                <img src={mobile} style={{width:"70%",height:"100%"}}/>
            </div>
        </div>
    )
}