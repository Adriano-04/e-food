import { Item, Lista } from "./style";
import Pizza from '../../assets/images/image 3.png'
import Prato from '../../components/Prato'

const ListagemPerfil = () => (
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
)

export default ListagemPerfil