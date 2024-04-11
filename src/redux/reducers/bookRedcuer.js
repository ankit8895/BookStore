import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchByAuthor = createAsyncThunk(
  'fetchByAuthor',
  async (args, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(
        'https://d1krvzwx5oquy1.cloudfront.net/books.json'
      );

      return fulfillWithValue(data);
    } catch (error) {
      if (error.response && error.response.data.message) {
        throw rejectWithValue(error.response.data.message);
      } else {
        throw rejectWithValue(error.message);
      }
    }
  }
);

const authorsSlice = createSlice({
  name: 'authors',
  initialState: {
    loading: false,
    authorsName: [],
    error: '',
  },
  extraReducers: (builder) => {
    builder.addCase(fetchByAuthor.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchByAuthor.fulfilled, (state, action) => {
      const uniqueAuthors = new Set();

      action.payload.forEach((book) => {
        const authors = book.volumeInfo.authors;
        authors.forEach((author) => {
          if (!uniqueAuthors.has(author)) {
            uniqueAuthors.add(author);
          }
        });
      });

      const uniqueAuthorsArray = Array.from(uniqueAuthors);
      state.loading = false;
      state.authorsName = uniqueAuthorsArray;
    });
    builder.addCase(fetchByAuthor.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ? action.payload : action.error.message;
    });
  },
});

const authorsReducer = authorsSlice.reducer;

export { authorsReducer, fetchByAuthor };
