import styled from "styled-components";
import { BotaoSobre } from "../Prato/style";
import { Cores, Texto } from "../../style";

export const Lista = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const Item = styled.li`
    display: flex;
    justify-content: center;

    ${BotaoSobre} {
        text-align: center;
        width: 95%;
        margin: 8px;
    }

    img {
        display: block;
        margin: 0 auto;
        padding-top: 8px;
    }
`

export const Modal = styled.div`
    display: none;
    position: absolute;
    background-color: ${Cores.laranja};
    color: ${Cores.branco};
    padding: 32px;
    max-width: 1024px;
    width: 100%;
    z-index: 1;

    &.visible {
        display: flex;
    }

    img {
        width: 280px;
        height: 280px;
        margin-right: 24px;
        object-fit: cover;
    }

    ${Texto} {
        margin: 16px 0;
    }
`
export const Overlay = styled.div`
    position: fixed;
    display: none;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);

    &.visible {
        display: flex;
    }
`

export const Button = styled.button`
    cursor: pointer;
    padding: 4px 6px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: ${Cores.laranja};
    border: none;
    background-color: ${Cores.fundoFooter};
`