import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder: any) => ({

        getFeaturedProducts: builder.query({
            query: () => {
                let url = '/products';
                url += `?isFeatured=true`;

                return {
                    url,
                    method: 'GET',
                };


            },
            transformResponse: (response: any) => {
                return response?.data?.result;
            }

        }),
        //add product
        addProduct: builder.mutation({
            query: (data: any) => ({
                url: '/products/create-product',
                method: 'POST',
                body: data  
            }),
            invalidatesTags: ['products']
        }),
        
        getAllProducts: builder.query({
            query: () => {
                let url = '/products';
                return {
                    url,
                    method: 'GET',
                };
            

            },
            providesTags: ['products'],
            transformResponse: (response: any) => {
                return response?.data?.result;
            }

        }),
        //delete product
        deleteProduct: builder.mutation({
            query: (id: string) => ({
                url: `/products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['products']
        }),
        getProductsByCategory: builder.query({
            query: (category: string) => {
                let url = '/products';
                    url += `?category=${category}`;
                    return {
                        url,
                        method: 'GET',
                    };
                },
                transformResponse: (response: any) => {
                    return response?.data?.result;
                }
            })


        }),
    })

export const {useAddProductMutation, useGetFeaturedProductsQuery, useGetAllProductsQuery, useGetProductsByCategoryQuery , useDeleteProductMutation} = productsApi;
