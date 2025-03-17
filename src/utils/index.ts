export const formataPrecos = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

export const getDescricao = (descricaoSlice: string) => {
    if (descricaoSlice.length > 210) {
        return descricaoSlice.slice(0,210) + '...'
    }

    return descricaoSlice
}