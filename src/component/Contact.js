import { motion } from 'framer-motion';
import React, { useState } from 'react'

const Contact = () => {
  const [data,setData]=useState({name:"",email:"",phone:"",message:""});
  const handleSubmit= e=>
  {
    e.preventDefault();
    alert("Sorry ! Request cannot be accepted due to some technical issue")
    setData({name:"",email:"",phone:"",message:""})
    
  }
  const handleChange=e=>
  {
    setData(
      {
        ...data,
        [e.target.name]:e.target.value
      }
    )
  }

  // animation 
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
    <div className="contact">
        <h2 className="heading">
            Contact Me
        </h2>
        <motion.div {...animations.div} transition={{ delay: 0.4 }}>        <form className="form" onSubmit={handleSubmit}>
            <input type="text"placeholder='Your Name' name='name' value={data.name} onChange={handleChange} required/>
            <input type="email"placeholder='Your Email' name='email' value={data.email} onChange={handleChange} required/>
            <input type="number"placeholder='Your Phone' name='phone' value={data.phone} onChange={handleChange} required />
            <textarea name="message" id="" cols="30" rows="10" placeholder='Message' value={data.message} onChange={handleChange}></textarea>
            <input type="submit" />
        </form>
        </motion.div>
    </div>
      
    </>
  )
}

export default Contact
