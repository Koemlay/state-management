import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API = createApi ({
    reducerPath: "api",
    baseQuery: fetchBaseQuery ({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL
    }),
    tagTypes: ['products'],
    endpoints: () => ({
    })
})