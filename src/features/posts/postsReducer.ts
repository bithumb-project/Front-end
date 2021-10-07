import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostsResponse, Response } from '../../types/postsType';

interface PostsInitialState {
  data: PostsResponse;
}

interface PostsState extends Response {
  view?: 0;
  recommend?: 0;
  blame?: 0;
  declare?: false;
}

type PostsInfo = PostsState[];

/*
    {
      userId: 0,
      id: 0,
      title: '',
      body: '',
      view: 0,
      recommend: 0,
      blame: 0,
      declare: false,
    },
    */

const initialState: PostsInitialState = {
  data: [
    {
      userId: 0,
      id: 0,
      title: '',
      body: '',
    },
  ],
};

const postsSlice = createSlice({
  name: 'postsState',
  initialState,
  reducers: {
    totalpostsData: (state, action: PayloadAction<PostsInfo>) => {
      state.data = action.payload;
    },
  },
});

export const { totalpostsData } = postsSlice.actions;

export default postsSlice.reducer;
