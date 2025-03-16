import Prato from "../Restaurante";
import { Lista } from "./style";

type Props = {
    pratos: Restaurante[]
}

const Listagem = ({ pratos }: Props) => (
    <Lista>
    {pratos.map((prato) => (
        <li key={prato.id}>
            <Prato
                id={prato.id} 
                avaliacao={prato.avaliacao}
                titulo={prato.titulo}
                capa={prato.capa} 
                descricao={prato.descricao}
                destacado={prato.destacado}
            />
        </li>
    ))}
    </Lista>

)

export default Listagem