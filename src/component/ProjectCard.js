import React from 'react'

const ProjectCard = ({data}) => {
    const {imgsrc,title,desc,github,projectUrl}=data;
  return (
    <>
       <div className="cerificate">
       <div className="card">
                <div className="card-img">
                    <img src={imgsrc} alt="project-img" />
                </div>
                <div className="card-body">
                    <h3 className="card-title  my-3 c-title ">{title}</h3>
                   <p>{desc}</p>
                </div>
                <div className="card-button mb-3">
                    <a href={github} target="_blank" className='btn btn-p-outline me-2 '>GitHub</a>
                    <a href={projectUrl} target="_blank" className='btn btn-p'>Visit</a>
                </div>
            </div>
       </div>
    </>
  )
}

export default ProjectCard
