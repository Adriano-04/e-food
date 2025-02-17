import styled from "styled-components";
import { Cores } from "../../style";

export const Header = styled.div`
    height: 180px;
    width: 100%;
`

export const Lista = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
export const Imagem = styled.img`
    height: 210px;
    width: 100%;
    margin-bottom: 60px;
`

export const Item = styled.li`
    display: flex;
    justify-content: center;
`

export const HeaderItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
        margin-top: 64px;
    }
`

export const Textos = styled.p`
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color: ${Cores.laranja};
`