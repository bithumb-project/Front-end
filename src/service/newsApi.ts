import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// interface Data {
//   // page: number;
//   data: any;
// }

// const today = new Date().toISOString().substring(0,10);

// export const newsApi = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/everything'}),
//   reducerPath: 'newsApi',
//   endpoints: (builder) => ({
//     getNews: builder.query<any, { page: number }>({
//       query: (arg) => {
//         const { page } = arg;
//         return {
//           url: '',
//           params: {
//             q: 'bitcoin',
//             from: today,
//             sortBy: 'publishedAt',
//             language: 'en',
//             pageSize: 15,
//             page: page,
//             apiKey: 'd490e68d09374f989d8f45d6f74c6ca1'
//           }
//         }
//       }
//     }),
//   }),
// });

// export const { useGetNewsQuery } = newsApi;

// export const getNews = createAsyncThunk(
//   'news/load',
//   async (data: Data) => {
//     const { page } = data;
//     const response = await axios.get('https://newsapi.org/v2/everything', {
//       params:{
//         q: 'bitcoin',
//         from: today,
//         sortBy: 'publishedAt',
//         language: 'en',
//         pageSize: 15,
//         page: page,
//         apiKey: 'd490e68d09374f989d8f45d6f74c6ca1'
//       }
//     });
//     console.log(response.data);
//     return response.data;
//   }
// );

