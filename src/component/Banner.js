import { motion } from 'framer-motion'
import React from 'react'
import Typewriter from 'typewriter-effect'
import profle from '../img/profile.jpg'
import resume from '../pdf/resume.pdf'

const Banner = () => {
  const animations = {
    div: {
      initial: {
        x:"-100%",
        opacity: 0,
      },
      whileInView: {
        x:0,
        opacity: 1,
      },
    },
    img: {
      initial: {
        y:"-100%",
        opacity: 0,
      },
      whileInView: {
        y:0,
        opacity: 1,
      },
    }

  }
  return (
    <>
      <div className="banner">
      <motion.div {...animations.div}transition={{delay:0.3}}>
        <div className="banner-text">
          <p className='secondary'>Hello, I'm</p>
          <h2>Amol Rautrao</h2>
          <p className='secondary'>
          <Typewriter options={{
            strings:["Frontend Web Developer"],
            autoStart:true,
            loop:true,
            cursor:"",
          }} />
          </p>
          <a href={resume} className='btn btn-outline-primary me-2'>Resume</a>
          <a className='btn btn-primary'>Let's Talk</a>
        </div>
        </motion.div>
        <motion.div {...animations.img} transition={{delay:0.5}}>
        <div className="banner-img">
          <img src={profle} alt='profile photo' />
        </div>
        </motion.div>
      </div>
    </>
  )
}

export default Banner
