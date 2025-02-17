import logoImg from '../../assets/images/logo.svg'
import Prato from '../../components/Prato'
import HeroImg from '../../assets/images/fundo.png'
import Pizza from '../../assets/images/image 3.png'
import apresentacao from '../../assets/images/apresentacao.png'
import { Header, HeaderItems, Imagem, Item, Lista, Textos } from './style'

const Perfil = () => (
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
        <Lista>
            <Item>
                <Prato estilo='perfil' nome='Pizza Marguerita' descricao='A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' imagem={Pizza}/>
            </Item>
            <Item>
                <Prato estilo='perfil' nome='Pizza Marguerita' descricao='A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' imagem={Pizza}/>
            </Item>
            <Item>
                <Prato estilo='perfil' nome='Pizza Marguerita' descricao='A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' imagem={Pizza}/>
            </Item>
            <Item>
                <Prato estilo='perfil' nome='Pizza Marguerita' descricao='A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' imagem={Pizza}/>
            </Item>
            <Item>
                <Prato estilo='perfil' nome='Pizza Marguerita' descricao='A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' imagem={Pizza}/>
            </Item>
        </Lista>
    </>
)

export default Perfil