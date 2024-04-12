import React from 'react';
import PrivacyScreenAnimation from '../utils/PrivacyScreenAnimation';

const Section = ({ children, classname }) => {
  return (
    <div
      className={`font-londrina w-screen h-screen ${
        classname ? classname : ''
      }`}
    >
      {children}
      <PrivacyScreenAnimation classname='privacy-screen' />
    </div>
  );
};

export default Section;
