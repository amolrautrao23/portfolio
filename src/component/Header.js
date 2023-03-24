import React from 'react'
import '../App.css'
import Navbar from './Navbar'
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="brand">
                    <h2>Amol Rautrao</h2>
                </div>
                <div className="navbar">
                    <Navbar isTop={true}/>
                </div>
            </div>
            <hr  className='m-0 text-white' />
        </>
    )
}

export default Header
