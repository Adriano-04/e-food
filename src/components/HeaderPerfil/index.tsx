import { Header, HeaderItems, Imagem, Textos } from "./style";
import HeroImg from '../../assets/images/fundo.png'
import logoImg from '../../assets/images/logo.svg'
import apresentacao from '../../assets/images/apresentacao.png'

const HeaderPerfil = () => (

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
                    0 Produtos(s) no carrinho
                </Textos>
            </li>
        </HeaderItems>
    </Header>
    <Imagem src={apresentacao} alt="La dolce" />
    </>
)

export default HeaderPerfil