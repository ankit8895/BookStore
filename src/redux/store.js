import { configureStore } from '@reduxjs/toolkit';
import {
  authorsReducer,
  genresReducer,
  allAuthorBooksReducer,
  allGenreBooksReducer,
} from './reducers/bookRedcuer';

const store = configureStore({
  reducer: {
    authorsList: authorsReducer,
    genresList: genresReducer,
    allAuthorBooksList: allAuthorBooksReducer,
    allGenreBooksList: allGenreBooksReducer,
  },
});

export default store;
