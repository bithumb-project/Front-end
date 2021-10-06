import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './user';
import newsSlice from './news';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  news: newsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;