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
  likedMovies: [],
};

export const getGenres = createAsyncThunk("netflix/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(
    `${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );

  // console.log(genres);
  return genres;
});

const createMovieArr = async (genres, type, id = 0) => {
  const movies = [];
  for (let i = 1; movies.length < 60 && i < 10; i++) {
    //all
    let api_url = `${TMBD_BASE_URL}/trending/${type}/week?api_key=${API_KEY}&page=${i}`;

    //for selected genres
    if (id !== 0) {
      api_url = `${TMBD_BASE_URL}/discover/${type}?api_key=${API_KEY}&page=${i}&with_genres=${id}`;
    }

    const {
      data: { results },
    } = await axios.get(api_url);
    // console.log(results, id);
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
      // console.log(results[j]);
      if (results[j].backdrop_path !== null) {
        movies.push({
          id: results[j].id,
          name:
            results[j].title !== undefined ? results[j].title : results[j].name,
          image: results[j].backdrop_path,
          genres: genre_names,
        });
      }
    }
  }
  // console.log(movies, id);
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

export const getDataByGenre = createAsyncThunk(
  "netflix/genre",
  async ({ genre, type }, thunkAPI) => {
    const {
      netflix: { genres },
    } = thunkAPI.getState();
    // console.log("*****", genre, type, genres, genreName, "******");
    return createMovieArr(genres, type, genre);
  }
);

export const getUserLikedMovies = createAsyncThunk(
  "netflix/getLiked",
  async (email) => {
    const {
      data: { movies },
    } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/liked/${email}`);
    return movies;
  }
);

export const removeFromList = createAsyncThunk(
  "netflix/remove",
  async (email, movieId) => {
    const {
      data: { likedMovies },
    } = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/remove`, {
      email,
      movieId,
    });
    return likedMovies;
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
    builder.addCase(getDataByGenre.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(getUserLikedMovies.fulfilled, (state, action) => {
      state.likedMovies = action.payload;
    });
    builder.addCase(removeFromList.fulfilled, (state, action) => {
      state.likedMovies = action.payload;
    });
  },
});

export const store = configureStore({
  reducer: {
    netflix: netflixSlice.reducer,
  },
});
