import { useEffect, useState } from "react"
import Hero from "../../components/Hero"
import Listagem from "../../components/Listagem"
import { Container } from "../../style"

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