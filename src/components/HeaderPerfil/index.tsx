import { Header, HeaderItems, Hero, TextoNav, TextoTitulo, TextoTituloPrincipal } from "./style";
import HeroImg from '../../assets/images/fundo.png'
import logoImg from '../../assets/images/logo.svg'
import apresentacao from '../../assets/images/imagem_de_fundo.png'
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { open } from "../../store/Reducers/Carrinho";

type Props = {
    restaurante: Restaurante
}

const HeaderPerfil = ({ restaurante }: Props) => {
    const { items } = useSelector((state: RootReducer) => state.carrinho)

    const dispatch = useDispatch()

    const openCart = () => {
        dispatch(open())
    }

    return (

        <>
        <Header style={{ background: `url(${HeroImg})`}}>
            <HeaderItems>
                <li>
                    <TextoNav>Restaurantes</TextoNav>
                </li>
                <li>
                    <img src={logoImg} alt="Logo efood" />
                </li>
                <li>
                    <TextoNav onClick={() => openCart()}>
                        {items.length} Produtos(s) no carrinho
                    </TextoNav>
                </li>
            </HeaderItems>
        </Header>
        <Hero style={{ background: `url(${apresentacao})`}}>
            <div className="container">
                <TextoTitulo>
                    {restaurante.destacado}
                </TextoTitulo>
                <TextoTituloPrincipal>{restaurante.titulo}</TextoTituloPrincipal>
            </div>
        </Hero>
        </>
    )
}

export default HeaderPerfil