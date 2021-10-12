import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import { newsApi } from '../features/news/newsSlice';
import { postsSliceApi } from '../features/posts/postsSlice';
import postsReducer from '../features/posts/postsReducer';
import { usersSliceApi } from '../features/users/usersSlice';
import commentsReducer from '../features/comments/commentsReducer';
import { commentsSliceApi } from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    postsState: postsReducer,
    commentsState: commentsReducer,
    [postsSliceApi.reducerPath]: postsSliceApi.reducer,
    [usersSliceApi.reducerPath]: usersSliceApi.reducer,
    [commentsSliceApi.reducerPath]: commentsSliceApi.reducer,
    auth: authSlice,
    [newsApi.reducerPath]: newsApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      postsSliceApi.middleware,
      usersSliceApi.middleware,
      commentsSliceApi.middleware,
      newsApi.middleware
    );
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
