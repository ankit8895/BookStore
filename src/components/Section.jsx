import React from 'react';
import PrivacyScreenAnimation from '../utils/PrivacyScreenAnimation';
import { Link } from 'react-router-dom';

const Section = ({ children, classname, link }) => {
  return (
    <div
      className={`font-londrina h-screen w-screen ${
        classname ? classname : ''
      }`}
    >
      {link && (
        <Link
          to={link}
          class='relative px-6 py-3 font-bold text-white rounded-lg group m-2 md:m-4 lg:m-6'
        >
          <span class='absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0'></span>
          <span class='absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen'></span>
          <span class='relative'>Back</span>
        </Link>
      )}
      {children}
      <PrivacyScreenAnimation classname='privacy-screen' />
    </div>
  );
};

export default Section;
