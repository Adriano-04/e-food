import Hero from "../../components/Hero"
import Listagem from "../../components/Listagem"
import { Container } from "../../style"

const Home = () => (
    <>
        <Hero/>
        <Container>
            <Listagem />
        </Container>
    </>
)

export default Home