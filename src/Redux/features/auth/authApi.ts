import baseApi from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/login',
                method: 'POST',
                body: userInfo,
            }),
        }),
        getAllUsers: builder.query({
            query: () => ({
                url: '/users/all-user',
                method: 'GET',
            }),
        }),
        getAllAdmins: builder.query({
            query: () => ({
                url: '/admins',
                method: 'GET',
            }),
        }),
    }),
})

export const { useLoginMutation, useGetAllUsersQuery , useGetAllAdminsQuery} = authApi;
