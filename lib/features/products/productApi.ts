import { API } from "../api/api";
import { ProductResponse } from "@/lib/types/product-type";

export const productApi = API.injectEndpoints ({
    endpoints: (builder) => ({
        getProducts: builder.query<ProductResponse[], void> ({
            query: () => '/products',
            providesTags: ['products']
        }),
        addProduct: builder.mutation({
            query: (newProduct) => ({
                url: '/products',
                method: 'POST',
                body: newProduct
            }),
            invalidatesTags: ['products']
        })
        })
    })

// export hooks for ui can use it
export const {useGetProductsQuery, useAddProductMutation} = productApi    