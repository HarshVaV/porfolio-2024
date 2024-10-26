import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrapper = ({ idName, classNames, children }) => {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <div>
          {children} {/* Original Component */}
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrapper;