import { useEffect, useState } from 'react'
import HeaderPerfil from '../../components/HeaderPerfil'
import ListagemPerfil from '../../components/ListagemPerfil'
import { Container } from '../../style'
import { useParams } from 'react-router-dom'
import Carrinho from '../../components/Carrinho'

const Cardapio = () => {
    const [restaurante, setRestaurante] = useState<Restaurante>()
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then((resposta) => resposta.json())
            .then((resposta) => {console.log(resposta); setRestaurante(resposta)})
    }, [id])

    if (restaurante && (
        <h2>Carregando</h2>
    ))
    return (
    <>
        <HeaderPerfil restaurante={restaurante}/>
        <Container>
            <ListagemPerfil restaurante={restaurante}/>
            <Carrinho />
        </Container>
    </>
    )
}

export default Cardapio

