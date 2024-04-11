import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FilterGenreAndAuthor from './pages/FilterGenreAndAuthor';
import FilterByAuthor from './pages/FilterByAuthor';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<FilterGenreAndAuthor />} />
        <Route path='/authors' element={<FilterByAuthor />} />
      </Routes>
    </Router>
  );
};

export default App;
