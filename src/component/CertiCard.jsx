import React from 'react'   
import '../css/certificate.css'

const CertiCard = ({ data }) => {
  const { title, imgsrc, desc ,doc} = data;
  return (
    <>
      <div className="certi">
        <figure>
          <img src={imgsrc} alt="project-img" height="42" width="42" />
        </figure>
        <div className="c-body">
          <h3 className="c-title my-3">{title}</h3>
          <p>{desc}</p>
        </div>
        <div className="c-button mb-3">
          <a href={doc} target="_blank" className='btn btn-view'>View Certificate</a>
        </div>
      </div>
    </>
  )
}

export default CertiCard
