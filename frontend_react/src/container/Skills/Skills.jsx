
import React, { useState, useEffect } from 'react';
import { easeIn, motion } from 'framer-motion';


// import { AppWrap, MotionWrap } from '../../wrapper';
import AppWrapper from '../../wrapper/AppWrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';


const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const expQuery = '*[_type == "workExperience"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(expQuery).then((data) => {
      data.sort((a,b)=> b['year']-a['year']) //recent exp at Top
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>


      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div

              whileInView={{ opacity:[0,1]  }}
              transition={{ duration: 1,  ease:"easeIn"}}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor||'var(--primary-color)' }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">

          {experiences.map((experience,index) => (
            <>
              <div
                className="app__skills-exp-item"
                key={experience.year}
                >
                  <div className="app__skills-exp-year bold-text">
                    <p className="bold-text">{experience.year}</p>
                  </div>
          
                  <motion.div
                    whileInView={{ x:[100,0], opacity: [0.5, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    key={experience.name}
                    >
                    <h4 className="bold-text">{experience.name}</h4>
                    <p className="p-text">{experience.company}</p>
                  </motion.div>
              </div>
              {index!=experiences.length-1 && (
                <div className='app__skills-exp-timeline'>&nbsp;</div>
              )}
            </>
          ))}
          </div>
        </div>
    </>
  );
}

const wrappedSkills= ()=>{
  return (
    <AppWrapper idName="skills" classNames="app__skills app__whitebg">
      <Skills/>
    </AppWrapper>
  )
}

export default wrappedSkills 