import { Texto } from "../../style"
import { getDescricao } from "../../utils/index"
import { Button, Card } from "./style"

type Props = {
    nome: string
    descricao: string
    imagem: string
    modalVisible: () => void
}

const Prato = ({ nome, descricao, imagem, modalVisible }: Props) => {

    return (
        <Card>
            <img src={imagem} alt={nome} />
            <h3>{nome}</h3>
            <Texto>
                {getDescricao(descricao)}
            </Texto>
            <Button onClick={modalVisible}>Adicionar ao carrinho</Button>
        </Card> 
    )
}

export default Prato