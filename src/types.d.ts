
declare type Restaurante = {
    id: number
    titulo: string
    descricao: string
    capa: string
    avaliacao?: string
    infos?: string[]
    destacado?: boolean
    cardapio: {
        foto: string
        preco: number
        id: number
        nome: string
        descricao: string
        porcao: string
    }[]
}

type Product = {
    id : number
    price: number
}

declare type CheckOut = {
    products: Product[]
    delivery: {
        receiver: string
        address: {
            description: string
            city: string
            zipCode: string
            number: number
            complement?: string
        }
    }
    payment: {
        card: {
            name: string
            number: string
            code: number
            expires: {
                month: number
                year: number
            }
        }
    }
}

declare module 'react-text-mask' {
    import { Component } from 'react'

    interface MaskedInputProps {
        mask: (string | RegExp)[]
        guide?: boolean
        placeholderChar?: string
        keepCharPositions?: boolean
        showMask?: boolean
        value?: string
        onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
        onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any
    }

    export default class MaskedInput extends Component<MaskedInputProps> {}
}