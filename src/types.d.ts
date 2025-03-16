
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


