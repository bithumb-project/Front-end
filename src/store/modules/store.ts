import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  middleware: [...getDefaultMiddleware()]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;