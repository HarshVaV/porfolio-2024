import React from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';



import {images} from '../../constants'
import './Navbar.scss'
import { useState } from 'react';




const Navbar = () => {
  const [toggle,setToggle]=useState(false); //false: when webpage get loaded for 1st-time, menubar is HIDDEN (no-aimation)

  const fadeVariants={
    fadeIn :{ x: ['100%',0], opacity:[0,1]}, // fadeIn-Animation
    fadeOut:{ x: [0,'100%'], opacity:[1,0] } //fadeOut-Animation
  }


  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/*  side-navbar for smaller-Display */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle('fadeIn')} />

        {/* FadeIn-FadeOut trasition */}
      
        {toggle && (
          <motion.div
            variants={fadeVariants}
            animate={toggle}
            transition={{ duration: 1, ease: 'easeOut'}}
          >
            <HiX onClick={() => setToggle('fadeOut')} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
      )} 


      </div>
    </nav>
  )
}

export default Navbar