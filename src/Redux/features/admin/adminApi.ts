import { baseApi } from "../../api/baseApi";


const adminApi = baseApi.injectEndpoints({
   endpoints: (builder: any) => ({
      getAllUsers: builder.query({
         query: () => '/users/all-user',
         method: 'GET',
        
      }),
      changeStatus: builder.mutation({
         query: (data:{id:string, status:string}) => ({
            url: `/users/status/${data?.id}`,
            method: 'PATCH',
            body: {
                status: data?.status
            }
         }),
      }),
      //create admin
      createAdmin: builder.mutation({
         query: (data: any) => ({
            url: '/admins/create-admin',
            method: 'POST',
            body: data
         })
      }),
      changeRole: builder.mutation({
         query: (data:{id:string, role:string}) => ({
            url: `/users/${data?.id}`,
            method: 'PATCH',
            body: {
               role: data?.role
            }
         })
      })
     
   }),
})

export const { useGetAllUsersQuery, useChangeStatusMutation, useCreateAdminMutation, useChangeRoleMutation } = adminApi;
