import React from 'react';
import { motion } from 'framer-motion';



import AppWrapper from '../../wrapper/AppWrapper';
import { JobTag } from '../../components';
import { images } from '../../constants';
import resume from '../../assets/resume.pdf'
import './Header.scss';



const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="badge">
        <span className="badge-greet">
          HI THERE 👋 I'M          
        </span>

        <div className="badge-details app__flex">
          <emp className='badge-details__name'>Harsh Vardhan</emp>
          <div className='badge-details__tag '>
            <JobTag/>
          </div>
          <div className='badge-details__about'>I'm a professional UI/UX designer with front end
          development skills.</div>
        </div>
        <div className='badge-btn'>
          <a href={resume} download="Harsh Vardhan Resume" >Download Resume</a>

        </div>

      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img className="profile" src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    {/* <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    > 
      {[images.flutter, images.redux, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div> */}
  </div>
);

const WrappedHeader= ()=>{
  return (
    <AppWrapper idName="home">
      <Header />
    </AppWrapper>
  )
}


export default WrappedHeader;