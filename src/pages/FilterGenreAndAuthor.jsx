import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';

import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from '../utils/ScrollAnimationWrapper';
import PopupAnimationWrapper from '../utils/PopupAnimationWrapper';

import SearchGenreAndAuthor from '../components/SearchGenreAndAuthor';
import { homeComponents } from '../constant';

const FilterGenreAndAuthor = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <Section classname='flex flex-col items-start tracking-widest'>
      <PopupAnimationWrapper className='container max-w-5xl mx-auto text-center mt-4 md:mt-16'>
        <motion.h1 className='text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>
            The Turning Page
          </span>
          <span className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500'></span>
        </motion.h1>
        <motion.p className='text-lg text-white mb-8'>
          More than just a bookstore, a{' '}
          <span className='hidden md:inline'>literary</span> journey
        </motion.p>
      </PopupAnimationWrapper>
      <div className='flex flex-col lg:flex-row justify-center items-center max-w-5xl mx-auto gap-4 md:gap-32 md:mt-16'>
        {homeComponents.map((item, index) => (
          <SearchGenreAndAuthor
            key={index}
            search={item.search}
            route={item.route}
            icon={item.icon}
          />
        ))}
        {/* <PopupAnimationWrapper damping={5} delay={0.1}>
          <div className='group relative overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto rounded-lg sm:px-10'>
            <span className='absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]'></span>
            <div className='relative z-10 mx-auto w-72 md:w-[448px]'>
              <span className='grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-500'>
                <FiPenTool className='text-white transition-all h-10 w-10' />
              </span>
              <div className='space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90'>
                <p>Search Books by Authors</p>
              </div>
              <div className='pt-5 text-base font-semibold leading-7'>
                <p>
                  <Link
                    to='/authors'
                    className='text-sky-500 transition-all duration-300 group-hover:text-white'
                  >
                    Click to get more &rarr;
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </PopupAnimationWrapper> */}

        {/* <PopupAnimationWrapper damping={5} delay={0.1}>
          <div className='group relative overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto rounded-lg sm:px-10'>
            <span className='absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]'></span>
            <div className='relative z-10 mx-auto w-72 md:w-[448px]'>
              <span className='grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-500'>
                <LuFileType2 className='text-white transition-all h-10 w-10' />
              </span>
              <div className='space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90'>
                <p>Select Books by Genre</p>
              </div>
              <div className='pt-5 text-base font-semibold leading-7'>
                <p>
                  <Link
                    to='/genres'
                    className='text-sky-500 transition-all duration-300 group-hover:text-white'
                  >
                    Click to get more &rarr;
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </PopupAnimationWrapper> */}
      </div>
    </Section>
  );
};

export default FilterGenreAndAuthor;
