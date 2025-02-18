import styled from "styled-components";
import { Cores } from "../../style";
import { Props } from ".";

export const Card = styled.div<Omit<Props, 'nome' | 'descricao' | 'imagem' | 'nota'>>`
    width: ${props => props.estilo === 'perfil' ? '320px' : '470px'};
    max-width: 100%;
    border: 1px solid ${Cores.laranja};
    color: ${props => props.estilo === 'perfil' ? Cores.fundo : Cores.laranja};
    background-color: ${props => props.estilo === 'perfil' ? Cores.laranja : Cores.branco};
    height: ${props => props.estilo === 'perfil' ? '350px' : '400px'};
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const TextoPrincipal = styled.h3`
    font-size: 18px;
    font-weight: 700;
    margin: 0;
`

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 8px;
    width: 100%;
`
export const Texto = styled.p`
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    margin: 16px 8px;
`
export const BotaoSobre = styled.a<Omit<Props, 'nome' | 'descricao' | 'imagem' | 'nota'>>`
    color: ${props => props.estilo === 'perfil' ? Cores.laranja : Cores.fundo};
    padding: 6px;
    background-color: ${props => props.estilo === 'perfil' ? Cores.fundo : Cores.laranja};
    font-size: 14px;
    font-weight: bold;
    margin: 8px;
    cursor: pointer;
    width: ${props => props.estilo === 'perfil' ? '100%' : '92px'};
`
export const Tag = styled(BotaoSobre)`
    font-size: 12px;
    margin: 0 8px;
`
export const Tags = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
`