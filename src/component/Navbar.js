import React from 'react'

const Navbar = ({isTop}) => {
    const scroll=(x,y)=>{

        window.scrollTo(x,y);
    }
    return (
        <>
            <ul className={isTop?'nav-top':"nav-bottom"}>
                <li onClick={()=>scroll(0,0)}>Home</li>
                <li onClick={()=>scroll(100,400)}>About Me</li>
                <li onClick={()=>scroll(100,950)}>Skills</li>
                <li onClick={()=>scroll(100,1400)}>Projects</li>
                <li onClick={()=>scroll(100,2050)}>Contact Me</li>
            </ul>
        </>
    )
}

export default Navbar
