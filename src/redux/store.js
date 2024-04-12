import { configureStore } from '@reduxjs/toolkit';
import { authorsReducer, genresReducer } from './reducers/bookRedcuer';

const store = configureStore({
  reducer: {
    authorsList: authorsReducer,
    genresList: genresReducer,
  },
});

export default store;
