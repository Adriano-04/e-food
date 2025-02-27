import styled from "styled-components";
import { Cores, Texto } from "../../style";

export const Modal = styled.div`
    display: flex;
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
    display: flex;
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