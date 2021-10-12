import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CommentResponse } from '../../types/commentsType';

type Data = CommentResponse;

export const commentsSliceApi = createApi({
  reducerPath: 'commentsSliceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints(builder) {
    return {
      getComments: builder.query<Data, void>({
        query: () => '/comments',
      }),
      getComment: builder.query<Data, string>({
        query: (id) => `/comments?postId=${id}`,
      }),
    };
  },
});

export const { useGetCommentsQuery, useGetCommentQuery } = commentsSliceApi;
