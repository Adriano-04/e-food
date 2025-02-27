import { Item, Lista} from "./style";
import Prato from '../Prato'
import { useState } from "react";
import { Restaurante } from "../../pages/Home";
import ModalPerfil from "../Modal";

type Props = {
    cardapio: Restaurante['cardapio']
}

const ListagemPerfil = ({ cardapio }: Props) => {
    const [modal, setModal] = useState(false)
    const [pratoModal , setPratoModal] = useState<Restaurante['cardapio'][0]>()

    return (
        <Lista>
        {cardapio.map((prato) => (
            <Item key={prato.id}>
                <Prato
                    nome={prato.nome}
                    descricao={prato.descricao}
                    imagem={prato.foto}
                    modalVisible={() => 
                        {
                            setPratoModal(prato);
                            setModal(true);
                        }}
                />
            </Item>
        ))}
        {modal && (
            <ModalPerfil prato={pratoModal} fechar={() => setModal(false)}/>
        )}
        </Lista>

    )
}

export default ListagemPerfil