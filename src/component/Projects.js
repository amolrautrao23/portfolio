import React from 'react'
// import pestcontol from '../img/pest-control.png'
import api from '../apidata/ProjectApi'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'
const Projects = () => {
  
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
      <div className="projects">
        <h2 className="heading">Projects</h2>
        <motion.div {...animations.div} transition={{ delay: 0.7 }}>
        <div className="card-container">
            {
                api.map(item=><ProjectCard data={item} key={item.id}/>)
            }
           
        </div>
        </motion.div>
      </div>
    </>
  )
}

export default Projects
