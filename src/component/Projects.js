import React from 'react'
import pestcontol from '../img/pest-control.png'
import api from '../apidata/ProjectApi'
import ProjectCard from './ProjectCard'
const Projects = () => {
  return (
    <>
      <div className="projects">
        <h2 className="heading">Projects</h2>
        <div className="card-container">
            {
                api.map(item=><ProjectCard data={item} key={item.id}/>)
            }
           
        </div>
      </div>
    </>
  )
}

export default Projects
