import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Data {
  data: any;
}

export const postsSliceApi = createApi({
  reducerPath: 'postsSliceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints(builder) {
    return {
      getPosts: builder.query<Data, void>({
        query: () => '/posts',
      }),
      getPost: builder.query<Data, string>({
        query: (id) => `/posts/${id}`,
      }),
      putPost: builder.mutation<Data, any>({
        query: ({ id, ...patch }) => ({
          url: `posts/${id}`,
          method: 'PUT',
          body: patch,
        }),
      }),
    };
  },
});

export const { useGetPostsQuery, usePutPostMutation, useGetPostQuery } =
  postsSliceApi;
