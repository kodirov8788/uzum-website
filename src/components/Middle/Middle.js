import React from 'react'
import './Middle.scss'
import './Middlemed.scss'
import img1 from "../../images/img1.jpg"
function Middle() {
    return (
        <div className='mid'>
            <div className="midimg">
                <img className='midimg1' src={img1} alt="" />
            </div>
        </div>
    )
}

export default Middle