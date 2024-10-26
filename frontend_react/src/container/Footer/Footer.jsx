import React, { useState } from 'react';
import { easeIn, easeInOut, motion } from 'framer-motion';

import AppWrapper from '../../wrapper/AppWrapper'
import { images } from '../../constants';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me
      </h2>

      <motion.div 
         intial={{opacity:0, scale:0.8}}
         whileInView={{opacity:[0,1], scale:[0.8,1]}}
         transition={{duration:1}}
        className="app__footer-cards"
      >
        <div className="app__footer-card" >
          <img src={images.email} alt="email" />
          <a href="mailto:harsh.apr315@gmail.com" className="p-text">harsh.apr315@gmail.com</a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 70044 64935" className="p-text">+91 70044 64935</a>
        </div>
      </motion.div>
      {!isFormSubmitted ? (
        <motion.div 
          intial={{opacity:0}}
          whileInView={{opacity:[0,1], y:[100,0]}}
          transition={{duration:1}}
          className="app__footer-form app__flex"
        >
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </motion.div>
      ) : (
        <div>
          <h3 className=" greet-text">
            Thank you for getting in touch! <span>😊</span>
          </h3>
        </div>
      )}
    </>
  );
};

const WrappedFooter= ()=>{
  return (
    <AppWrapper idName="contact" classNames="app__footer ">
      <Footer/>
    </AppWrapper>
  )
}

export default WrappedFooter;