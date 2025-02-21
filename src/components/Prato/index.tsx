import { BotaoSobre, Card, Div, Tag, Tags, Texto, TextoPrincipal } from "./style";
import Estrela from '../../assets/images/star_favorite.svg'
import { Link } from "react-router-dom";

export type Props = {
    nome: string
    descricao: string
    imagem: string
    nota?: string
    estilo?: 'perfil' | 'home'
    infos?: string[]
}

const Prato = ({nome, descricao, imagem, nota, estilo, infos}: Props) => (
    <>
        <Card estilo={estilo}>
            <img src={imagem} alt={nome} />
            <Tags>
                {infos?.map((info) => (
                    <Tag key={info}>{info}</Tag>
                ))}
            </Tags>
            <Div>
                <TextoPrincipal>{nome}</TextoPrincipal>
                {nota && (
                    <TextoPrincipal>
                    {nota}
                    <img src={Estrela} alt="estrela" />
                    </TextoPrincipal>
                 )}
            </Div>
            <Texto>{descricao}</Texto>
            <BotaoSobre as={Link} to='/perfil' estilo={estilo}>
                {estilo === 'perfil' ? 'Adicionar ao carrinho' : 'Saiba mais'}
            </BotaoSobre>
        </Card>
    </>
)

export default Prato