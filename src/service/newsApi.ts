import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
interface Data {
  today: string;
  page: number;
}
export const getNews = createAsyncThunk(
  'news/load',
  async (data: Data) => {
    const {today, page} = data;
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params:{
        q: 'bitcoin',
        from: today,
        sortBy: 'publishedAt',
        language: 'en',
        pageSize: 15,
        page: page,
        apiKey: 'd490e68d09374f989d8f45d6f74c6ca1'
      }
    });
    console.log(response.data);
    return response.data;
  }
);