import { Overlay } from "../Modal/style"
import { CartContainer} from "./style"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { close } from "../../store/Reducers/Carrinho"
import { JSX } from "react/jsx-runtime"

type Props = {
    children: JSX.Element
}

const SideBar = ({ children }: Props) => {
    const { isOpen } = useSelector((state: RootReducer) => state.carrinho)
    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    return (
        <>
        {isOpen ? (
            <>
            <Overlay onClick={closeCart}/>
                <CartContainer>
                    {children}
                </CartContainer>
            </>
        ) : (
            null
        )}
        </>
    )
}

export default SideBar