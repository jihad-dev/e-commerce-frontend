import { baseApi } from "../../api/baseApi";


const adminApi = baseApi.injectEndpoints({
   endpoints: (builder: any) => ({
      getAllUsers: builder.query({
         query: () => '/users/all-user',
         providesTags: ['users']
      }),
      changeStatus: builder.mutation({
         query: (data:{id:string, status:string}) => ({
            url: `/users/status/${data?.id}`,
            method: 'PATCH',
            body: {
                status: data?.status
            }
         }),
         invalidatesTags: ['users']
      })
     
   }),
})

export const { useGetAllUsersQuery, useChangeStatusMutation } = adminApi;
