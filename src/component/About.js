import { motion } from 'framer-motion'
import React from 'react'
import about from '../img/about.png'

const About = () => {
  const animations={
    div:{
      initial:{
        opacity:0,
      },
      whileInView:{
        opacity:1,
      },
    }

  }
  return (
    <>
      <div className="about">
        <h2 className="heading">
            About Me
        </h2>
        <section className="about-inner">
        <motion.div {...animations.div} transition={{delay:0.5}}>
            <div className="about-img">
                <img src={about} alt="about img" />
            </div>
            </motion.div>
            <div className="about-text">
            <motion.div {...animations.div} transition={{delay:0.3}}>
                <h2>Amol Rautrao</h2>
                <p className='poppins'>
                        A self-tought Frontend Web Developer MCA student looking for
                        an opportunity in Web Development. <br/>
                        Who is committed to study web development. Mindset to fullfill the life with
                        wonderful memories and knowledge.</p>
                        <a href="https://www.linkedin.com/in/amol-rautrao-841024269" target='_blank' className='btn btn-primary'>Know More</a>
                        </motion.div>
            </div>
        </section>
        
      </div>
    </>
  )
}

export default About
