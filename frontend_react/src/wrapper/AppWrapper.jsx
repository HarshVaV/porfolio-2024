import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrapper = ({ idName, classNames, children }) => {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper">
        
          {children} {/* Original Component */}
        
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrapper;