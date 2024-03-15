import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
    reducerPath: "projectApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api/v1",
        credentials: "include",
    }),
    endpoints: (builder) => ({
        getProjects: builder.query({
            query: (params) => ({
                url: "/projects",
                params: {
                    page: params?.page,
                    keyword: params?.keyword,
                },
            }),
        }),
        getProjectDetails: builder.query({
            query: (id) => `/projects/${id}`,
        }),
    }),
});

export const { useGetProjectsQuery, useGetProjectDetailsQuery } = projectApi;
