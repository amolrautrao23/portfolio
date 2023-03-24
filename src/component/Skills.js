import React from 'react'
import skills from '../img/skills.svg'
const Skills = () => {
  return (
    <>
      <div className="skills">
        <h2 className='heading'>Skills</h2>
        <div className="skills-inner">
          <div className="skills-img">
            <img src={skills} alt="img-skills" />
          </div>

          {/* skill bars */}
          <div className="skills-right">
            <div className="skills-container">
              <div className="html">
                <span className='skills-content-left'>HTML</span>
                <span className='skills-content-right'>90%</span>
              </div>

              <div className="css">
                <span className='skills-content-left'>CSS</span>
                <span className='skills-content-right'>80%</span>
              </div>

              <div className="javascript">
                <span className='skills-content-left'>JavaScript</span>
                <span className='skills-content-right'>75%</span>
              </div>

              <div className="bootstrap">
                <span className='skills-content-left'>Bootstrap</span>
                <span className='skills-content-right'>60%</span>
              </div>

              <div className="react-js">
                <span className='skills-content-left'>React Js</span>
                <span className='skills-content-right'>70%</span>
              </div>

              <div className="java">
                <span className='skills-content-left'>Java</span>
                <span className='skills-content-right'>40%</span>
              </div>

              {/* <div className="react-native">
                <span className='skills-content-left'>React Native</span>
                <span className='skills-content-right'>10%</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
