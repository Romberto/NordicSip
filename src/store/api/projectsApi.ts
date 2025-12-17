import { Project } from '@/src/types'
import { baseApi } from './baseApi'


interface ProjectsResponse {
  items: Project[]
  total: number
}

export const projectsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 🔹 HERO (3 проекта)
    getHeroProjects: builder.query<ProjectsResponse, void>({
      query: () => ({
        url: '/projects/',
        params: {
          skip: 0,
          limit: 3,
          only_published: false,
        },
      }),
    }),

    // 🔹 Все проекты (100)
    getProjects: builder.query<ProjectsResponse, void>({
      query: () => ({
        url: '/projects/',
        params: {
          skip: 0,
          limit: 100,
          only_published: false,
        },
      }),
    }),
  }),
})

export const {
  useGetHeroProjectsQuery,
  useGetProjectsQuery,
} = projectsApi
