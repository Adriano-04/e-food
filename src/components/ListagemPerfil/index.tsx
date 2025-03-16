import { Item, Lista} from "./style";
import Prato from '../Prato'
import { useState } from "react";
import ModalPerfil from "../Modal";

type Props = {
    restaurante: Restaurante
}

const ListagemPerfil = ({ restaurante }: Props) => {
    const [modal, setModal] = useState(false)
    const [pratoModal , setPratoModal] = useState<Restaurante['cardapio'][0] | null>(null)

    const abreModal = (prato: Restaurante['cardapio'][0]) => {
        setPratoModal(prato)
        setModal(true)
    }

    return (
        <Lista>
        {restaurante.cardapio.map((prato) => (
            <Item key={prato.id}>
                <Prato
                    nome={prato.nome}
                    descricao={prato.descricao}
                    imagem={prato.foto}
                    modalVisible={() => abreModal(prato)}
                />
            </Item>
        ))}
        {modal && pratoModal && (
            <ModalPerfil prato={pratoModal} fechar={() => setModal(false)}/>
        )}
        </Lista>

    )
}

export default ListagemPerfil