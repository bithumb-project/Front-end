import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import { newsApi } from '../features/news/newsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(newsApi.middleware)
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;