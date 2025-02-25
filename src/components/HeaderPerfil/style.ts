import styled from "styled-components";
import { Cores } from "../../style";

export const Header = styled.div`
    height: 185px;
    width: 100%;
`
export const HeaderItems = styled.ul`
    display: flex;
    justify-content: center;
    gap: 180px;
    align-items: center;
    width: 100%;

    li {
        margin-top: 64px;
    }
`

export const Textos = styled.p`
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color: ${Cores.laranja};

    @media (max-width: 768px) {
        font-size: 12px;
    }
`

export const Imagem = styled.img`
    height: 280px;
    width: 100%;
    margin-bottom: 60px;

    @media (max-width: 768px) {
        width: auto;
        height: 150px;
    }
`
