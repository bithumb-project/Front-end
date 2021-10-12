import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostsResponse, Response } from '../../types/postsType';

interface PostsInitialState {
  data?: PostsResponse;
  recommend: number;
  blame: number;
  declare: boolean;
  post: Response;
}

interface PostsState extends Response {
  view?: number;
  recommend?: number;
  blame?: number;
  declare?: boolean;
}

type PostsInfo = PostsState[];

type Count = number;
type Declare = boolean;

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
  recommend: 0,
  blame: 0,
  declare: false,
  post: {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  },
};

const postsSlice = createSlice({
  name: 'postsState',
  initialState,
  reducers: {
    recommendCount: (state, action: PayloadAction<Count>) => {
      state.recommend = state.recommend + action.payload;
    },
    blameCount: (state, action: PayloadAction<Count>) => {
      state.blame = state.blame + action.payload;
    },
    isDeclare: (state, action: PayloadAction<Declare>) => {
      state.declare = action.payload;
    },
    addPostData: (state, action: PayloadAction<Response>) => {
      state.post = { ...state.post, ...action.payload };
    },
  },
});

export const { recommendCount, blameCount, isDeclare, addPostData } =
  postsSlice.actions;

export default postsSlice.reducer;
