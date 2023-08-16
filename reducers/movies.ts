import { createSlice, createAsyncThunk, combineReducers } from '@reduxjs/toolkit'

const APIKey:string = 'fe948b32120519f42ab283f800b989c8'

export interface MoviesState {
  results: any[],
  error: string | null,
  status: "loading" | "idle"
}

const initialState: MoviesState = {
  results: [],
  error: null,
  status: "idle",
}

// First, create the thunk
export const fetchPlayingMovies = createAsyncThunk(
  // The first argument is the action name:
  'movies/nowPlaying',
  // the second one is a function
  // called payload creator.
  // It contains async logic of a side-effect.
  // We can perform requests here,
  // work with device API, 
  // or any other async APIs we need to.
  async () => {
    // Fetch the backend endpoint:
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}&language=en-US&page=1`)
    const data = await response.json()
    return data
  }
)

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // When we send a request,
    // `fetchPlayingMovies.pending` is being fired:
    builder.addCase(fetchPlayingMovies.pending, (state) => {
      // At that moment,
      // we change status to `loading` 
      // and clear all the previous errors:
      state.status = "loading"
      state.error = null;
    });

    // When a server responses with the data,
    // `fetchTodos.fulfilled` is fired:
    builder.addCase(fetchPlayingMovies.fulfilled, 
      (state, { payload }) => {
      // We add all the new todos into the state
      // and change `status` back to `idle`:
      state.results.push(...payload.results)
      state.status = "idle"
    });

    // When a server responses with an error:
   /* builder.addCase(fetchPlayingMovies.rejected, 
      (state, { payload }) => {
      // We show the error message
      // and change `status` back to `idle` again.
      if (payload) state.error = payload.message
      state.status = "idle"
    });*/
  }
})

export default moviesSlice.reducer
