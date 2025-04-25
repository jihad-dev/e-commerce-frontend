import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder: any) => ({
        login: builder.mutation({
            query: (userInfo: any) => ({
                url: '/auth/login',
                method: 'POST',
                body: userInfo,
            }),
        }),

        getSingleUser: builder.query({
            query: (id: string) => ({
                url: `/users/${id}`,
                method: 'GET',
            }),
            transformResponse: (response: any) => response?.data,
        }),
        getAllAdmins: builder.query({
            query: () => ({
                url: '/admins',
                method: 'GET',
            }),
            transformResponse: (response: any) => response?.data,
        }),
    }),
})

export const { useLoginMutation, useGetAllAdminsQuery, useGetSingleUserQuery} = authApi;
