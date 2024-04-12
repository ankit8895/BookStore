import React from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import FilterGenreAndAuthor from './pages/FilterGenreAndAuthor';
import FilterByAuthor from './pages/FilterByAuthor';
import FilterByGenre from './pages/FilterByGenre';

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
