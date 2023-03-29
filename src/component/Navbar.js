import React from 'react'

const Navbar = ({isTop}) => {
    const scroll=(y)=>{

        window.scrollTo(0,y);
    }
    return (
        <>
            <ul className={isTop?'nav-top':"nav-bottom"}>
                <li onClick={()=>scroll(0,0)}>Home</li>
                <li onClick={()=>scroll(400)}>About Me</li>
                <li onClick={()=>scroll(950)}>Skills</li>
                <li onClick={()=>scroll(1480)}>Projects</li>
                <li onClick={()=>scroll(2520)}>Contact Me</li>
            </ul>
        </>
    )
}

export default Navbar
