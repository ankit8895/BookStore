import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Section from '../components/Section';
import { fetchByAuthor } from '../redux/reducers/bookRedcuer';

import { FiPenTool } from 'react-icons/fi';
import { LuFileType2 } from 'react-icons/lu';

const FilterByAuthor = () => {
  const dispatch = useDispatch();

  const { loading, authorsName, error } = useSelector(
    (state) => state.authorsList
  );

  useEffect(() => {
    if (authorsName.length === 0) {
      dispatch(fetchByAuthor());
    }
  }, [authorsName]);
  return (
    <Section>
      <div className='flex flex-col lg:flex-row lg: flex-wrap justify-center items-center max-w-5xl mx-auto gap-4 md:gap-32 md:mt-16'>
        {authorsName.length > 0 &&
          authorsName.map((author, index) => (
            <div
              key={index}
              className='group relative overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm rounded-lg sm:px-10'
            >
              <span className='absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]'></span>
              <div className='relative z-10 mx-auto w-72 md:w-[448px]'>
                <span className='grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-500'>
                  <FiPenTool className='text-white transition-all h-10 w-10' />
                </span>
                <div className='space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90'>
                  <p>{author}</p>
                </div>
                <div className='pt-5 text-base font-semibold leading-7'>
                  <p>
                    <a
                      href='#'
                      className='text-sky-500 transition-all duration-300 group-hover:text-white'
                    >
                      Click to get more &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Section>
  );
};

export default FilterByAuthor;
