import { BlogPost, Project } from '@/src/types'
import { baseApi } from './baseApi'


interface BlogsResponse {
  items: BlogPost[]
  total: number
}



export const blogsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 🔹 HERO (3 проекта)
    getHeroBlogs: builder.query<BlogsResponse, void>({
      query: () => ({
        url: '/blog/',
        params: {
          skip: 0,
          limit: 3,
          only_published: false,
        },
      }),
    }),

    // 🔹 Все проекты (100)
    getBlogs: builder.query<BlogsResponse, void>({
      query: () => ({
        url: '/blog/',
        params: {
          skip: 0,
          limit: 100,
          only_published: false,
        },
      }),
    }),

    getBlogsBySlug: builder.query<BlogPost, string>({
      query: slug => `/blog/${slug}`,
      providesTags: ['Blog'],
    }),

  }),
})

export const {
    useGetHeroBlogsQuery,
   useGetBlogsBySlugQuery,
   useGetBlogsQuery
} = blogsApi