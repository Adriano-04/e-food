import { Header, HeaderItems, Hero, Textos, TextoTitulo, TextoTituloPrincipal } from "./style";
import HeroImg from '../../assets/images/fundo.png'
import logoImg from '../../assets/images/logo.svg'
import apresentacao from '../../assets/images/imagem_de_fundo.png'

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
        <Hero style={{ background: `url(${apresentacao})`}}>
            <div className="container">
                <TextoTitulo>
                    Italiana
                </TextoTitulo>
                <TextoTituloPrincipal>La Dolce Vita Trattoria</TextoTituloPrincipal>
            </div>
        </Hero>
    </>
)

export default HeaderPerfil