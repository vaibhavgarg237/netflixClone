import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, TMBD_BASE_URL } from "../utils/constants";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

export const getGenres = createAsyncThunk("netflix/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(
    `${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );

  console.log(genres);
  return genres;
});

const createMovieArr = async (genres, type) => {
  const movies = [];
  for (let i = 1; movies.length < 60 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(
      `${TMBD_BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${i}`
    );

    //filter results {contains movies}
    for (let j = 0; j < results.length; j++) {
      let genre_names = [];
      //find genre names for each id
      for (let k = 0; k < results[j].genre_ids.length; k++) {
        const name = genres.find(({ id }) => id === results[j].genre_ids[k]);
        if (name) {
          genre_names.push(name.name);
        }
      }

      movies.push({
        id: results[j].id,
        name: results[j].title,
        image: results[j].backdrop_path,
        genres: genre_names,
      });
    }
  }
  console.log(movies);
  return movies;
};

export const getMovies = createAsyncThunk(
  "netflix/trending",
  async ({ type }, thunkAPI) => {
    const {
      netflix: { genres },
    } = thunkAPI.getState();
    return createMovieArr(genres, type);
  }
);

const netflixSlice = createSlice({
  name: "netflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export const store = configureStore({
  reducer: {
    netflix: netflixSlice.reducer,
  },
});
