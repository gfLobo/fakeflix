import { createSlice, createAsyncThunk, combineReducers } from '@reduxjs/toolkit'

const APIKey:string = 'fe948b32120519f42ab283f800b989c8'

export interface MovieState {
  result: any[],
  error: string | null,
  status: "loading" | "idle"
}

const initialState: MovieState = {
  result: [],
  error: null,
  status: "idle",
}

export const fetchMovieById = createAsyncThunk(
  'movie/fetchMovieById',
  async ( id: number ) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`)
    const data = await response.json()
    return data
  }
)

export const movieByIdSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    eraser(state) {
      state.result = []
    } 
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovieById.pending, (state) => {
      state.status = "loading"
      state.error = null
    });

    builder.addCase(fetchMovieById.fulfilled, (state, { payload }) => {
      state.result = []
      state.result.push(payload)
      state.status = "idle"
    });

   /* builder.addCase(fetchMovieById.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message
      state.status = "idle"
    });*/
  }
})

export const { eraser } = movieByIdSlice.actions
export default movieByIdSlice.reducer
