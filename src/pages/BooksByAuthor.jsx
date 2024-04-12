import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Section from '../components/Section';

import {
  fethAllBooksByAuthor,
  allAuthorBooksAction,
} from '../redux/reducers/bookRedcuer';

import PopupAnimationWrapper from '../utils/PopupAnimationWrapper';

import { ImCart } from 'react-icons/im';

const BooksByAuthor = () => {
  const { name, id } = useParams();
  const updatedName = name.split('-').join(' ');
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState({});

  const { loading, error, books } = useSelector(
    (state) => state.allAuthorBooksList
  );

  useEffect(() => {
    if (books.length === 0) {
      dispatch(fethAllBooksByAuthor(updatedName));
    } else if (books.length > 0) {
      const initialOpenState = Object.fromEntries(
        books.map((book) => [book.id, false])
      );
      setIsOpen(initialOpenState);
    }
  }, [books]);

  useEffect(() => {
    return () => {
      dispatch(allAuthorBooksAction.resetAuthorsBook());
    };
  }, []);

  const handleToggle = (id) => {
    setIsOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Section
      classname='flex flex-col items-start tracking-widest'
      link={'/authors'}
    >
      <PopupAnimationWrapper className='container max-w-5xl mx-auto text-center mt-4 md:mt-16'>
        <motion.h1 className='text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>
            The Turning Page
          </span>
          <span className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500'></span>
        </motion.h1>
        <motion.p className='text-lg text-white mb-8'>
          All the books by {updatedName}
        </motion.p>
      </PopupAnimationWrapper>
      <div className='flex flex-row flex-wrap justify-center items-center max-w-7xl mx-auto gap-4 lg:gap-6 py-6 px-2 md:px-1 lg:px-2'>
        {books &&
          books.length > 0 &&
          books.map((book) => (
            <PopupAnimationWrapper key={book.id} damping={5} delay={0.1}>
              <motion.figure
                whileHover={
                  !isOpen[book.id]
                    ? {
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }
                    : {}
                }
                transition={{ layout: { duration: 1, type: 'spring' } }}
                layout
                onClick={() => handleToggle(book.id)}
                className='relative flex flex-col-reverse bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5 cursor-pointer'
              >
                {isOpen[book.id] && (
                  <motion.blockquote
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='mt-6 text-slate-700 dark:text-slate-300'
                  >
                    <p className='text-justify mb-2'>
                      <span className='text-cyan-500'>Publisher: </span>
                      {book.volumeInfo.publisher}
                    </p>
                    <p className='text-justify mb-2'>
                      <span className='text-cyan-500'>Published Date: </span>
                      {book.volumeInfo.publishedDate}
                    </p>
                    <p className='text-justify mb-2'>
                      <span className='text-cyan-500'>Genre: </span>
                      {book.volumeInfo.categories.map((genre, index) => (
                        <>{genre && <span key={index}>{genre}, </span>}</>
                      ))}
                    </p>
                    <p className='text-justify mb-2'>
                      <span className='text-cyan-500'>Description: </span>
                      {book.volumeInfo.description}
                    </p>
                  </motion.blockquote>
                )}
                <figcaption className='flex items-center space-x-4'>
                  <motion.img
                    layout
                    src={
                      book.volumeInfo.imageLinks.thumbnail ||
                      book.volumeInfo.imageLinks.smallThumbnail
                    }
                    alt={book.volumeInfo.title}
                    className={`flex-none rounded-lg ${
                      isOpen[book.id] ? 'w-28 h-28' : 'w-20 h-20'
                    }`}
                    loading='lazy'
                    decoding='async'
                  />
                  <div className='flex-auto'>
                    <motion.div
                      layout='position'
                      className='text-base text-slate-900 font-semibold dark:text-slate-200'
                    >
                      {book.volumeInfo.title}
                    </motion.div>
                    <motion.div
                      layout='position'
                      className='mt-0.5 dark:text-slate-300'
                    >
                      {book.volumeInfo.authors.map((author, index) => (
                        <span key={index}>{author}, </span>
                      ))}
                    </motion.div>
                    <motion.div
                      layout='position'
                      className='mt-0.5 dark:text-slate-300'
                    >
                      <Link
                        to={book.volumeInfo.canonicalVolumeLink}
                        target='_blank'
                        className='text-green-500 hover:dark:text-slate-300'
                      >
                        Buy Now: <ImCart className='inline-block' />
                      </Link>
                    </motion.div>
                  </div>
                </figcaption>
              </motion.figure>
            </PopupAnimationWrapper>
          ))}
      </div>
    </Section>
  );
};

export default BooksByAuthor;
