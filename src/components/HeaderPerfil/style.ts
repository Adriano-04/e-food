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

export const TextoNav = styled.a`
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color: ${Cores.laranja};
    cursor: pointer;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`

export const TextoTitulo = styled.h2`
    color: ${Cores.branco};
    font-size: 32px;
    font-weight: 100;
    line-height: 32px;
    position: absolute;
    top: 25px;
`

export const TextoTituloPrincipal = styled(TextoTitulo)`
    font-weight: bold;
    top: 214px;
`

export const Hero = styled.div`
    background-size: cover !important;
    background-repeat: no-repeat !important;
    position: relative;
    height: 280px;
    margin-bottom: 60px;
`
