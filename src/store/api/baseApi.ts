import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: (import.meta as any).env.VITE_API_URL,
  }),
  tagTypes: ['Project'],
  endpoints: () => ({}),
})
