import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  data: false,
};

const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
