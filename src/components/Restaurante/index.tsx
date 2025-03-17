import { BotaoSobre, Card, Div, Tag, Tags, TextoPrincipal } from "./style";
import Estrela from '../../assets/images/star_favorite.svg'
import { Link } from "react-router-dom";
import { Texto } from "../../style";
import { getDescricao } from "../../utils";

export type Props = {
    id: number
    titulo: string
    descricao: string
    capa: string
    avaliacao?: string
    infos?: string[]
    destacado?: boolean
}


const Restaurante = ({titulo, descricao, capa, avaliacao, infos, destacado, id}: Props) => {

     return (
    <Card>
        <img src={capa} alt={titulo} />
        <Tags>
            {infos?.map((info) => (
                <Tag key={info}>{info}</Tag>
            ))}
            {destacado && (
                <Tag>Destaque da semana</Tag>
            )}
        </Tags>
        <Div>
            <TextoPrincipal>{titulo}</TextoPrincipal>
            {avaliacao && (
                <TextoPrincipal>
                {avaliacao}
                <img src={Estrela} alt="estrela" />
                </TextoPrincipal>
             )}
        </Div>
        <Texto>{getDescricao(descricao)}</Texto>
        <BotaoSobre as={Link} to={`/cardapio/${id}`}>
             Saiba mais
        </BotaoSobre>
    </Card>
    )
}

export default Restaurante