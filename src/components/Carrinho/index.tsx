import { Button} from "../Modal/style"
import { BotaoLixeira, CartItem, Textos, Titulo } from "./style"
import lixeira from '../../assets/images/lixeira-de-reciclagem.png'
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { remove } from "../../store/Reducers/Carrinho"
import { formataPrecos } from "../../utils"

type Props = {
    continuar: () => void
} 

const Carrinho = ({ continuar }: Props) => {
    const { items } = useSelector((state: RootReducer) => state.carrinho)
    const dispatch = useDispatch()

    const removeItem = (item: Restaurante['cardapio'][0]) => {
        dispatch(remove(item))
    }

    const total = items.reduce((acc, item) => acc + item.preco, 0)

    return (
        <>

            {items.length > 0 && (
                <>
                    <ul>
                        {items.map((item) => (
                            <CartItem key={item.id}>
                                <img src={item.foto} alt="" />
                                <div>
                                    <Titulo>{item.nome}</Titulo>
                                    <p>{formataPrecos(item.preco)}</p>
                                </div>
                                <BotaoLixeira onClick={() => removeItem(item)}>
                                    <img src={lixeira} alt="lixeira para remover item" />
                                </BotaoLixeira>
                            </CartItem>
                        ))}
                    </ul>
                    <div>
                        <Textos>Valor total</Textos>
                        <Textos>{formataPrecos(total)}</Textos>
                    </div>
                    <Button onClick={continuar}>Continuar com a entrega</Button>
                </>
            )}

            {items.length === 0 && (
                <Textos>Não possui itens no carrinho</Textos>
            )}
        </>
    )
}

export default Carrinho