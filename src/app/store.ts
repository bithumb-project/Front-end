import { configureStore } from '@reduxjs/toolkit';
import { postsSliceApi } from '../features/posts/postsSlice';
import postsReducer from '../features/posts/postsReducer';
import { usersSliceApi } from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    postsSlice: postsReducer,
    [postsSliceApi.reducerPath]: postsSliceApi.reducer,
    [usersSliceApi.reducerPath]: usersSliceApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      postsSliceApi.middleware,
      usersSliceApi.middleware
    );
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
