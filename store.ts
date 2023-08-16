import { configureStore } from '@reduxjs/toolkit';

import moviesSlice from './reducers/movies'
import movieByIdSlice from './reducers/movieById'

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    movie: movieByIdSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
