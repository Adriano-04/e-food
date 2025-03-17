import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CarrinhoState = {
    items: Restaurante['cardapio'][0][]
    isOpen: boolean
}

const initialState: CarrinhoState = {
    items: [],
    isOpen: false
}

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Restaurante['cardapio'][0]>) => {
            const prato = state.items.find((item) => item.id === action.payload.id) 

            if (!prato) {
                state.items.push(action.payload)
            } else {
                alert('prato já adicionado')
            }
        },
        remove: (state, action: PayloadAction<Restaurante['cardapio'][0]>) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
})

export const { add, close, open, remove } = carrinhoSlice.actions
export default carrinhoSlice.reducer