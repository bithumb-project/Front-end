import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import newsSlice from './newsSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  news: newsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;