import React from 'react';
import PopupAnimationWrapper from '../utils/PopupAnimationWrapper';
import { FiPenTool } from 'react-icons/fi';
import { LuFileType2 } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const SearchGenreAndAuthor = ({ search, route, icon }) => {
  return (
    <PopupAnimationWrapper damping={5} delay={0.1}>
      <div className='group relative overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto rounded-lg sm:px-10'>
        <span className='absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]'></span>
        <div className='relative z-10 mx-auto w-72 md:w-[448px]'>
          <span className='grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-500'>
            {icon === 'authors' ? (
              <FiPenTool className='text-white transition-all h-10 w-10' />
            ) : (
              <LuFileType2 className='text-white transition-all h-10 w-10' />
            )}
          </span>
          <div className='space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90'>
            <p>{search}</p>
          </div>
          <div className='pt-5 text-base font-semibold leading-7'>
            <p>
              <Link
                to={route}
                className='text-sky-500 transition-all duration-300 group-hover:text-white'
              >
                Click to get more &rarr;
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PopupAnimationWrapper>
  );
};

export default SearchGenreAndAuthor;
