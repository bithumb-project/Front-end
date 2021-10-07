import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getNews } from '../../service/newsApi';

export interface Articles {
  id: number;
  author: string;
  title: string;
  publishedAt: string;
  url: string;
  urlToImage: string;
}

const initialState = {
  articles: [],
  totalResults: 0,
  currentPage: 1,
  pageCount: 1,
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getNews.pending, (state) => {})
      .addCase(getNews.fulfilled, (state, action: PayloadAction<any>) => {
        state.articles = action.payload.articles;
        state.totalResults = action.payload.totalResults;
        state.pageCount = Math.ceil(action.payload.totalResults / 15);
      })
      .addCase(getNews.rejected, (state) => {})
  }
});