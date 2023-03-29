import React from 'react'
import About from './About'
import Banner from './Banner'
import Certificates from './Certificates'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import NavResponsive from './NavResponsive'
import Projects from './Projects'
import Skills from './Skills'

const Home = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Skills/>
      <Certificates/>
      <Projects/>
      <Contact/>
      <Footer/>
      <NavResponsive/>
    </>
  )
}

export default Home
