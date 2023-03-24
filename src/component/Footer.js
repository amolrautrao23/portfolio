import React from 'react'
import Navbar from './Navbar'
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="nav">
          <Navbar isTop={false} />
        </div>
        <div className="footer-bottom">
          <ul className="social">
            <li>
              <a href="https://www.linkedin.com/in/amol-rautrao-841024269" target="_blank">
              <FaLinkedinIn />
              </a>
            </li>
            <li>
            <a href='https://github.com/amolrautrao23' target="_blank">
              <FaGithub />
            </a>
            </li>
            <li>
              <a href="" target="_blank">
              <FaInstagram />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
              <FaFacebookF />
              </a>
            </li>
            </ul>
          <p className="copyright text-center py-4 m-0">
          &copy; All Rights Reserved - <a href="https://www.linkedin.com/in/amol-rautrao-841024269" target="_blank" className='text-decoration-none text-white'>Amol Rautrao</a>
          </p>
        </div>
      </div>

    </>
  )
}

export default Footer
