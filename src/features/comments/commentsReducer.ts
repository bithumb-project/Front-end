import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Response, CommentResponse } from '../../types/commentsType';

interface CommentsInitialState {
  data: CommentResponse;
}

const initialState: CommentsInitialState = {
  data: [
    {
      postId: 0,
      id: 0,
      name: '',
      email: '',
      body: '',
    },
  ],
};

const commentsSlice = createSlice({
  name: 'commentsState',
  initialState,
  reducers: {
    initCommentData: (state, action: PayloadAction<CommentResponse>) => {
      state.data = action.payload;
    },
  },
});

export const { initCommentData } = commentsSlice.actions;

export default commentsSlice.reducer;
