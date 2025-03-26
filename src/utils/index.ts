export const formataPrecos = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

export const getDescricao = (descricaoSlice: string) => {
    if (descricaoSlice.length > 200) {
        return descricaoSlice.slice(0,200) + '...'
    }

    return descricaoSlice
}