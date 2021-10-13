import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  TransformedPostsResponse,
  PostsResponse,
  Response,
  PhotoPostsResponse,
} from '../../types/postsType';

type Data = TransformedPostsResponse;

export const postsSliceApi = createApi({
  reducerPath: 'postsSliceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),

  endpoints(builder) {
    return {
      getPosts: builder.query<Data, void>({
        query: () => '/posts',
        transformResponse: (data: TransformedPostsResponse) =>
          data.map((post) => ({
            ...post,
            view: Math.floor(Math.random() * 100),
            recommend: Math.floor(Math.random() * 10),
            blame: Math.floor(Math.random() * 10),
            declare: false,
          })),
      }),
      getPost: builder.query<Response, string>({
        query: (id) => `/posts/${id}`,
      }),
      getPhotoPost: builder.query<PhotoPostsResponse, void>({
        query: () => '/photos',
      }),
      putPost: builder.mutation<Data, any>({
        query: ({ id, ...patch }) => ({
          url: `posts/${id}`,
          method: 'PUT',
          body: patch.updateBody,
        }),
      }),
      deletePost: builder.mutation<Data, any>({
        query: (id) => ({
          url: `posts/${id}`,
          method: 'DELETE',
        }),
      }),
    };
  },
});

export const {
  useGetPhotoPostQuery,
  useGetPostsQuery,
  usePutPostMutation,
  useGetPostQuery,
  useDeletePostMutation,
} = postsSliceApi;
