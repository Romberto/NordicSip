import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://projhouse.ru/api/v1/'
  }),
  tagTypes: ['Project', 'Blog'],
  endpoints: () => ({}),
  
})
