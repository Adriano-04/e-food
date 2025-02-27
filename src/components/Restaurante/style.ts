import styled from "styled-components";
import { Cores } from "../../style";
import { Props } from ".";

export const Card = styled.div<Omit<Props, 'titulo' | 'descricao' | 'capa' | 'avaliacao' | 'id'>>`
    width: 470px;
    max-width: 100%;
    border: 1px solid ${Cores.laranja};
    color: ${Cores.laranja};
    background-color: ${Cores.branco};
    height: 405px;
    position: relative;
    overflow: hidden;
    flex-direction: column;

    > img {
        height: 218px;
        width: 470px;
        object-fit: cover;
    }
`

export const TextoPrincipal = styled.h3`
    font-size: 18px;
    font-weight: 700;
    padding-top: 4px;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 4px;
`

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 8px;
    width: 95%;
`
export const BotaoSobre = styled.a<Omit<Props, 'titulo' | 'descricao' | 'capa' | 'avaliacao'>>`
    color: ${Cores.fundo};
    padding: 6px;
    margin: 6px;
    background-color: ${Cores.laranja};
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    width: 92px;
    display: block;
`
export const Tag = styled.div`
    background-color: ${Cores.laranja};
    font-weight: bold;
    margin: 0 8px;
    height: 26px;
    padding: 6px 8px;
`
export const Tags = styled.div`
    display: flex;
    position: absolute;
    font-size: 12px;
    color: ${Cores.fundo};
    line-height: 14px;
    top: 16px;
    right: 16px;
`