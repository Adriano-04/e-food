import { Button, Overlay } from "../Modal/style"
import { BotaoLixeira, CartContainer, CartItem, Textos, Titulo } from "./style"
import lixeira from '../../assets/images/lixeira-de-reciclagem.png'
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { close } from "../../store/Reducers/Carrinho"
import { formataPrecos } from "../../utils"

const Carrinho = () => {
    const { items, isOpen } = useSelector((state: RootReducer) => state.carrinho)
    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const total = items.reduce((acc, item) => acc + item.preco, 0)

    return (
        <>
        {isOpen ? (
            <>
            <Overlay onClick={closeCart}/>
                <CartContainer>
                    <ul>
                        {items.map((item) => (
                            <CartItem>
                                <img src={item.foto} alt="" />
                                <div>
                                    <Titulo>{item.nome}</Titulo>
                                    <p>{formataPrecos(item.preco)}</p>
                                </div>
                                <BotaoLixeira>
                                    <img src={lixeira} alt="lixeira para remover item" />
                                </BotaoLixeira>
                            </CartItem>
                        ))}
                    </ul>
                    <div>
                        <Textos>Valor total</Textos>
                        <Textos>{formataPrecos(total)}</Textos>
                    </div>
                    <Button>Continuar com a entrega</Button>
                </CartContainer>
            </>
        ) : (
            null
        )}
        </>
    )
}

export default Carrinho