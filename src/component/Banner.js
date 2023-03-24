import React from 'react'
import profle from '../img/profile.jpg'
import resume from '../pdf/resume.pdf'
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-text">
            <p className='secondary'>Hello, I'm</p>
            <h2>Amol Rautrao</h2>
            <p className='secondary'>Frontend Web Developer</p>
            <a href={resume} className='btn btn-outline-primary me-2'>Resume</a>
            <a className='btn btn-primary'>Let's Talk</a>
        </div>
        <div className="banner-img">
            <img src={profle} alt='profile photo'/>
        </div>
      </div>
    </>
  )
}

export default Banner
