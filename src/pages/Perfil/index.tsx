import { useEffect, useState } from 'react'
import HeaderPerfil from '../../components/HeaderPerfil'
import ListagemPerfil from '../../components/ListagemPerfil'
import { Container } from '../../style'
import { Restaurante } from '../Home'
import { useParams } from 'react-router-dom'

const Perfil = () => {
    const [prato, setPrato] = useState<Restaurante['cardapio']>([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then((resposta) => resposta.json())
            .then((resposta) => setPrato(resposta.cardapio))
    }, [id])

    return (
    <>
        <HeaderPerfil />
        <Container>
            <ListagemPerfil cardapio={prato}/>
        </Container>
    </>
    )
}

export default Perfil

