import { Header, HeaderItems, Hero, Textos, TextoTitulo, TextoTituloPrincipal } from "./style";
import HeroImg from '../../assets/images/fundo.png'
import logoImg from '../../assets/images/logo.svg'
import apresentacao from '../../assets/images/imagem_de_fundo.png'
import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

type Props = {
    restaurante: Restaurante
}

const HeaderPerfil = ({ restaurante }: Props) => {
    const { items } = useSelector((state: RootReducer) => state.carrinho)

    return (

        <>
        <Header style={{ background: `url(${HeroImg})`}}>
            <HeaderItems>
                <li>
                    <Textos>Restaurantes</Textos>
                </li>
                <li>
                    <img src={logoImg} alt="Logo efood" />
                </li>
                <li>
                    <Textos>
                        {items.length} Produtos(s) no carrinho
                    </Textos>
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