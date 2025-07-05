import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const audiusApi = createApi({
  reducerPath: 'audiusApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://discoveryprovider.audius.co/v1',
  }),
  endpoints: (builder) => ({
    getTrendingTracks: builder.query({
      query: () => 'tracks/trending?time_range=week&limit=10',
    }),
  }),
});

export const { useGetTrendingTracksQuery } = audiusApi;
