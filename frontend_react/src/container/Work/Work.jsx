import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion, useInView } from 'framer-motion';


import { urlFor, client } from '../../client';
import './Work.scss';
import AppWrapper from '../../wrapper/AppWrapper';




const Work = () => {

  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query)
      .then((data) => setWorks(data));
  }, []);

  const variant={
    notInView:{opacity:0},
    inView:{opacity:1}
  }

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <motion.div
        variants={variant}
        initial={variant.notInView}
        whileInView={variant.inView}
        transition={{duration: 1, when:"beforeChildren"}}

        className="app__work-portfolio"
      >
        {works.map((work, index) => (
          <motion.div 
            className="app__work-item app__flex" 
            key={index}

            initial={{scale:0.7}}
            whileInView={{scale:[0.7,1]}} 
            transition={{duration: 0.5, delayChildren: 0.5 }}
            // viewport={{ once: true }}
          >
            <div className="app__work-img app__flex">
              
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                className="app__work-hover app__flex"

                initial={{opacity:0}}
                whileHover={{ opacity:[0,1] }}
                transition={{ duration: 0.25, ease: 'easeIn', staggerChildren: 0.5 }}
                viewport={{ once: true }}
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};



const wrappedWork= ()=>{
  return(
    <AppWrapper idName="work" classNames='app__works'>
      <Work/>
    </AppWrapper>
  )
}

export default wrappedWork;
