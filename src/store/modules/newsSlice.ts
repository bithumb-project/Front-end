import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const today = new Date().toISOString().substring(0,10);

export const newsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/'}),
  reducerPath: 'newsApi',
  endpoints: (builder) => ({
    getNews: builder.query<any, string>({
      query: (page) => {
        return {
          url: 'everything/',
          params: {
            q: 'bitcoin',
            from: today,
            sortBy: 'publishedAt',
            language: 'en',
            pageSize: 15,
            page: page,
            apiKey: process.env.NEXT_PUBLIC_NEWSAPI_KEY,
          }
        }
      }
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;