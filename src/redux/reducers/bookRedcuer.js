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
      const uniqueAuthorsArray = [];

      action.payload.forEach((book) => {
        const authors = book.volumeInfo.authors;
        authors.forEach((author) => {
          if (!uniqueAuthors.has(author)) {
            uniqueAuthors.add(author);
            uniqueAuthorsArray.push({ name: author, id: book.id });
          }
        });
      });

      state.loading = false;
      state.authorsName = uniqueAuthorsArray;
    });
    builder.addCase(fetchByAuthor.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ? action.payload : action.error.message;
    });
  },
});

const fetchByGenre = createAsyncThunk(
  'fetchByGenre',
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

const genreSlice = createSlice({
  name: 'genre',
  initialState: {
    loading: false,
    genresArray: [],
    error: '',
  },
  extraReducers: (builder) => {
    builder.addCase(fetchByGenre.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchByGenre.fulfilled, (state, action) => {
      const uniqueGenre = new Set();

      action.payload.forEach((book) => {
        if (book.volumeInfo.categories !== undefined) {
          const genres = book.volumeInfo.categories;
          genres.forEach((genre) => {
            if (!uniqueGenre.has(genre)) {
              uniqueGenre.add(genre);
            }
          });
        }
      });

      const uniqueGenreArray = Array.from(uniqueGenre);
      state.loading = false;
      state.genresArray = uniqueGenreArray;
    });
    builder.addCase(fetchByGenre.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ? action.payload : action.error.message;
    });
  },
});

const fethAllBooksByAuthor = createAsyncThunk(
  'fethAllBooksByAuthor',
  async (authorName, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(
        'https://d1krvzwx5oquy1.cloudfront.net/books.json'
      );

      return fulfillWithValue({ data, authorName });
    } catch (error) {
      if (error.response && error.response.data.message) {
        throw rejectWithValue(error.response.data.message);
      } else {
        throw rejectWithValue(error.message);
      }
    }
  }
);

const authorsBookSlice = createSlice({
  name: 'authorsBook',
  initialState: {
    loading: false,
    books: [],
    error: '',
  },
  reducers: {
    resetAuthorsBook: (state, action) => {
      state.loading = false;
      (state.books = []), (state.error = '');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fethAllBooksByAuthor.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fethAllBooksByAuthor.fulfilled, (state, action) => {
      const { data, authorName } = action.payload;
      const allAuthorBooks = [];

      data.forEach((book) => {
        const authors = book.volumeInfo.authors;
        authors.forEach((author) => {
          if (authorName === author) {
            allAuthorBooks.push(book);
          }
        });
      });

      state.loading = false;
      state.books = allAuthorBooks;
    });
    builder.addCase(fethAllBooksByAuthor.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ? action.payload : action.error.message;
    });
  },
});

const fetchAllBooksByGenre = createAsyncThunk(
  'fethAllBooksByAuthor',
  async (genre, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(
        'https://d1krvzwx5oquy1.cloudfront.net/books.json'
      );

      return fulfillWithValue({ data, genre });
    } catch (error) {
      if (error.response && error.response.data.message) {
        throw rejectWithValue(error.response.data.message);
      } else {
        throw rejectWithValue(error.message);
      }
    }
  }
);

const genreBooksSlice = createSlice({
  name: 'genre',
  initialState: {
    loading: false,
    books: [],
    error: '',
  },
  reducers: {
    resetGenreBooks: (state, action) => {
      state.loading = false;
      state.books = [];
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllBooksByGenre.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllBooksByGenre.fulfilled, (state, action) => {
      const { data, genre } = action.payload;
      const uniqueGenreArray = [];

      data.forEach((book) => {
        if (book.volumeInfo.categories !== undefined) {
          const genres = book.volumeInfo.categories;
          genres.forEach((gen) => {
            if (genre === gen) {
              uniqueGenreArray.push(book);
            }
          });
        }
      });
      state.loading = false;
      state.books = uniqueGenreArray;
    });
    builder.addCase(fetchAllBooksByGenre.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ? action.payload : action.error.message;
    });
  },
});

const authorsReducer = authorsSlice.reducer;

const genresReducer = genreSlice.reducer;

const allAuthorBooksReducer = authorsBookSlice.reducer;
const allAuthorBooksAction = authorsBookSlice.actions;

const allGenreBooksReducer = genreBooksSlice.reducer;
const allGenreBooksAction = genreBooksSlice.actions;

export {
  authorsReducer,
  fetchByAuthor,
  genresReducer,
  fetchByGenre,
  allAuthorBooksReducer,
  allAuthorBooksAction,
  fethAllBooksByAuthor,
  allGenreBooksReducer,
  allGenreBooksAction,
  fetchAllBooksByGenre,
};
