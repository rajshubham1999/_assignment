import React from 'react'
import './Navbar.css'
import { MdArrowForwardIos } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

function Navbar() {
    return (
        <div className='main-container'>
            <div className='contain'>
                <div className='left'>
                    <div className='home'>Home
                        <span className='arrow'><MdArrowForwardIos size={10} /></span>
                    </div>
                    <div className='dashboard'>Dasboard V2</div>
                </div>
                <div className='right'>
                    <div className='search'>
                        <input type="text" placeholder='Type Something'/>
                    </div>
                    <div className='notification'>
                    <IoMdNotificationsOutline size={30} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar