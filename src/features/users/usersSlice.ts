import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UsersResponse } from '../../types/usersType';

type Data = UsersResponse;

export const usersSliceApi = createApi({
  reducerPath: 'usersSliceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints(builder) {
    return {
      getUsers: builder.query<Data, void>({
        query: () => '/users',
      }),
    };
  },
});

export const { useGetUsersQuery } = usersSliceApi;
