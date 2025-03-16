import { configureStore } from "@reduxjs/toolkit";
import carrinhoReducer from './Reducers/Carrinho'

export const store = configureStore({
    reducer: {
        carrinho: carrinhoReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>