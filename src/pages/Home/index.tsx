import { useEffect, useState } from "react"
import Hero from "../../components/Hero"
import Listagem from "../../components/Listagem"
import { Container } from "../../style"

export type Restaurante = {
    id: number
    titulo: string
    descricao: string
    capa: string
    avaliacao?: string
    infos?: string[]
    destacado?: boolean
    cardapio: 
    {
        foto: string
        preco: number
        id: number
        nome: string
        descricao: string
        porcao: string
    }[]
}

const Home = () => {

    const [restaurante, setRestaurante] = useState<Restaurante[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then((resposta) => resposta.json())
            .then((resposta) => setRestaurante(resposta))
    }, [])

    return (
    <>
        <Hero/>
        <Container>
            <Listagem pratos={restaurante} />
        </Container>
    </>
    )
}

export default Home