import React from 'react';

const Section = ({ children, classname }) => {
  return (
    <div
      className={`font-londrina w-screen h-screen ${
        classname ? classname : ''
      }`}
    >
      {children}
    </div>
  );
};

export default Section;
