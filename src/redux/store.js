import { configureStore } from '@reduxjs/toolkit';
import { authorsReducer } from './reducers/bookRedcuer';

const store = configureStore({
  reducer: {
    authorsList: authorsReducer,
  },
});

export default store;
