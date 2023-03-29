import React from 'react'
import {HiHome} from 'react-icons/hi'
import {FaUserAlt,FaCode} from 'react-icons/fa'
import {BsFillTelephoneOutboundFill,BsFillRocketTakeoffFill} from 'react-icons/bs'
const NavResponsive = () => {
  const scroll=y=>{

    window.scrollTo(0,y);
}
  return (
    <>
      <div className="nav-responsive">
      <ul className='nav-icons'>
      <li onClick={()=>scroll(0)}><HiHome/></li>
      <li onClick={()=>scroll(450)}><FaUserAlt/></li>
      <li onClick={()=>scroll(1250)}><FaCode/></li>
      <li onClick={()=>scroll(2050)}><BsFillRocketTakeoffFill/></li>
      <li onClick={()=>scroll(3550)}><BsFillTelephoneOutboundFill/></li>
      </ul>
      </div>
    </>
  )
}

export default NavResponsive
