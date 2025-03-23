import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
    }),
    endpoints: (builder) => ({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        purchase: builder.mutation<any, CheckOut>({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })

        })
    })
})

export const { usePurchaseMutation } = api

export default api