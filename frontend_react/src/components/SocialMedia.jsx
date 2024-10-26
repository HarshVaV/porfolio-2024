import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">

    <a href="https://x.com/Apr315Harsh">
      <BsTwitter/>
    </a>

    <a href="https://www.linkedin.com/in/harsh-vardhan-822a88204/">
      <BsLinkedin/>
    </a>

    <a href="https://github.com/HarshVaV">
      <BsGithub/>
    </a>

  </div>
);

export default SocialMedia;