import { Button, Item, Lista, Modal, Overlay } from "./style";
import Pizza from '../../assets/images/image 3.png'
import Prato from '../../components/Prato'
import { Texto } from "../../style";
import { useState } from "react";

const ListagemPerfil = () => {
    const [modal, setModal] = useState(false)

    return (
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
        {modal && (
            <>
                <Modal>
                    <img src={Pizza} alt="Pizza" />
                <div>
                    <h3>Pizza Marguerita</h3>
                    <Texto>
                    A pizza Margherita é uma pizza clássica da culinária italiana,
                    reconhecida por sua simplicidade e sabor inigualável. Ela é
                    feita com uma base de massa fina e crocante, coberta com molho
                    de tomate fresco, queijo mussarela de alta qualidade, manjericão
                    fresco e azeite de oliva extra-virgem. A combinação de sabores é
                    perfeita, com o molho de tomate suculento e ligeiramente ácido, o
                    queijo derretido e cremoso e as folhas de manjericão frescas, que
                    adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa,
                    que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. <br />
                    <br />
                    Serve: de 2 a 3 pessoas
                    </Texto>
                    <Button>Adicionar ao carrinho - R$ 60,90</Button>
                </div>
                </Modal>
                <Overlay onClick={() => setModal(false)}></Overlay>
            </>
        )}
        </Lista>
    )
}

export default ListagemPerfil