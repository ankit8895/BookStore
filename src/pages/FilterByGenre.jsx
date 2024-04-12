import React, { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import Section from '../components/Section';
import { fetchByGenre } from '../redux/reducers/bookRedcuer';

import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from '../utils/ScrollAnimationWrapper';
import PopupAnimationWrapper from '../utils/PopupAnimationWrapper';

const FilterByGenre = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const dispatch = useDispatch();
  const { loading, genresArray, error } = useSelector(
    (state) => state.genresList
  );

  useEffect(() => {
    if (genresArray.length === 0) {
      dispatch(fetchByGenre());
    }
  }, [genresArray]);
  return (
    <Section classname='flex flex-col items-start tracking-widest'>
      <ScrollAnimationWrapper className='container max-w-5xl mx-auto text-center mt-4 md:mt-16'>
        <motion.h1
          variants={scrollAnimation}
          className='text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative'
        >
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>
            The Turning Page
          </span>
          <span className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500'></span>
        </motion.h1>
        <motion.p
          variants={scrollAnimation}
          className='text-lg text-white mb-8'
        >
          Select books by the genre from store
        </motion.p>
      </ScrollAnimationWrapper>

      <div className='flex flex-row flex-wrap justify-center items-center max-w-7xl mx-auto gap-6 py-6 md:px-1 lg:px-2 md:mt-16 lg:mt-0'>
        {genresArray.length > 0 &&
          genresArray.map((genre, index) => (
            <PopupAnimationWrapper key={index} delay={index / 10}>
              <button className='group p-8 cursor-pointer relative text-xl font-normal border-0 flex items-center justify-center bg-transparent text-white h-auto w-[170px] overflow-hidden transition-all duration-100'>
                <span className='group-hover:w-full absolute left-0 h-full w-5 border-y border-l border-sky-500 transition-all duration-500'></span>

                <p className='group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all duration-200'>
                  {genre}
                </p>

                <span className='group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200'>
                  Click to get more &rarr;
                </span>

                <span className='group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-sky-500 transition-all duration-500'></span>
              </button>
            </PopupAnimationWrapper>
          ))}
      </div>
    </Section>
  );
};

export default FilterByGenre;
