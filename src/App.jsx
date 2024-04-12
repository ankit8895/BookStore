import React from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import FilterGenreAndAuthor from './pages/FilterGenreAndAuthor';
import FilterByAuthor from './pages/FilterByAuthor';
import FilterByGenre from './pages/FilterByGenre';
import BooksByAuthor from './pages/BooksByAuthor';
import BooksByGenre from './pages/BooksByGenre';

const App = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <FilterGenreAndAuthor />,
    },
    {
      path: '/authors',
      element: <FilterByAuthor />,
    },
    {
      path: '/genres',
      element: <FilterByGenre />,
    },
    {
      path: '/authors/:name/:id',
      element: <BooksByAuthor />,
    },
    {
      path: '/genres/:name',
      element: <BooksByGenre />,
    },
  ]);

  const location = useLocation();

  if (!element) return null;
  return (
    <AnimatePresence mode='wait' initial={false}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
};

export default App;
