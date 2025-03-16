import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CarrinhoState = {
    items: Restaurante[]
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
        add: (state, action: PayloadAction<Restaurante>) => {
            const prato = state.items.find((item) => item.id === action.payload.id) 

            if (!prato) {
                state.items.push(action.payload)
            } else {
                alert('prato já adicionado')
            }
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
})

export const { add, close, open } = carrinhoSlice.actions
export default carrinhoSlice.reducer