
import React from 'react';
import './body.css';
import { HiOutlineRefresh } from "react-icons/hi";
import { HiDotsVertical } from "react-icons/hi";
import { MdWatchLater } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";

function Body({ openSidebar }) { // Accept openSidebar as a prop
  return (
    <div className='container'>
        <div className='first'>
            <div className='firstleft'>
                <p>CNAPP Dashboard</p>
            </div>
            <div className='firstright'>
                <div className='widget'>
                    <button onClick={() => openSidebar(1)}>+ Add Widget</button> {/* Use the openSidebar function */}
                </div>
                <div className='refresh'><HiOutlineRefresh size={22} /></div>
                <div className='doticon'><HiDotsVertical size={22} /></div>
                <div className='third'>
                    <div className='watch'><MdWatchLater size={25} /></div>
                    <div className='line'><RxDividerVertical size={28}/></div>
                    <div className='lastbox'>
                        <p>Last 2 Days</p>
                        <RiArrowDropDownLine size={30} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body;
