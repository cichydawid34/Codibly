import { Api, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi: any = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getProducts: builder.query({
      query: (page: number) => `products/?page=${page}`,
    }),
    getProduct: builder.query({
      query: (id: number) => `product/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;