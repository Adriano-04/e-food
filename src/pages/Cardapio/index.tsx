import { useEffect, useState } from 'react'
import HeaderPerfil from '../../components/HeaderPerfil'
import ListagemPerfil from '../../components/ListagemPerfil'
import { Container } from '../../style'
import { useParams } from 'react-router-dom'
import SideBar from '../../components/SideBar'
import Carrinho from '../../components/Carrinho'
import Formulario from '../../components/Formulario'
import { MessagemCheckout } from './style'
import { Button } from '../../components/Modal/style'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Cardapio = () => {
    const [restaurante, setRestaurante] = useState<Restaurante>()
    const [etapas, setEtapas] = useState(1)
    const { id } = useParams()
    const { checkoutId } = useSelector((state: RootReducer) => state.carrinho)

    const avancar = () => {
        setEtapas((prev) => prev + 1)
    }
    const voltar = () => {
        setEtapas((prev) => prev - 1)
    }

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
            <SideBar>
                <>
                    <div style={{ display: etapas === 1 ? 'block' : 'none'}}>
                        <Carrinho continuar={avancar}/>
                    </div>

                    <div style={{display: etapas === 2 ? 'block' : 'none'}}>
                        <Formulario voltarEtapa={voltar} ProximaEtapa={avancar} tipo='entrega'/>
                    </div>

                    <div style={{display: etapas === 3 ? 'block' : 'none'}}>
                        <Formulario voltarEtapa={voltar} ProximaEtapa={avancar} tipo='pagamento' />
                    </div>

                    <div style={{display: etapas === 4 ? 'block' : 'none'}}>
                            <MessagemCheckout>
                                <h3>Pedido realizado - {checkoutId}</h3>
                                <p>
                                    Estamos felizes em informar que seu pedido já está em processo
                                    de preparação e, em breve, será entregue no endereço fornecido.
                                </p>
                                <p>
                                    Gostaríamos de ressaltar que nossos entregadores
                                    não estão autorizados a realizar cobranças extras. 
                                </p>
                                <p>
                                    Lembre-se da importância de higienizar as mãos após o recebimento do pedido,
                                    garantindo assim sua segurança e bem-estar durante a refeição.
                                </p>
                                <p>
                                    Esperamos que desfrute de uma deliciosa e agradável
                                    experiência gastronômica. Bom apetite!
                                </p>
                                <Button onClick={() => setEtapas(1)}>Concluir</Button>
                            </MessagemCheckout>
                    </div>
                </>
            </SideBar>
        </Container>
    </>
    )
}

export default Cardapio

