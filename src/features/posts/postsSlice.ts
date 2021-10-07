import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostsResponse, Response } from '../../types/postsType';

type Data = PostsResponse;

export const postsSliceApi = createApi({
  reducerPath: 'postsSliceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints(builder) {
    return {
      getPosts: builder.query<Data, void>({
        query: () => '/posts',
        transformResponse: (data: PostsResponse) =>
          data.map((post) => ({ ...post, view: 0, reommend: 0 })),
      }),
      getPost: builder.query<Response, string>({
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
