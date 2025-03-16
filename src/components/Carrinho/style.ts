import styled from "styled-components";
import { Cores } from "../../style";
import { Button } from "../Modal/style";

export const CartContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${Cores.laranja};
    width: 360px;
    height: 100vw;
    padding: 32px 8px;

    > div {
        display: flex;
        justify-content: space-between;
    }

    ${Button} {
        width: 100%;
        margin-top: 16px;
    }
`

export const Textos = styled.p`
    font-size: 14px;
    font-weight: bold;
    line-height: 16px;
    color: ${Cores.fundoFooter};
`

export const Titulo = styled(Textos)`
    color: ${Cores.laranja};
    line-height: 22px;
    margin-bottom: 16px;
    font-size: 18px;
`

export const CartItem = styled.li`
    display: flex;
    background-color: ${Cores.fundoFooter};
    padding: 8px;
    margin-bottom: 16px;
    position: relative;

    > img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin-right: 8px;
    }

    p {
        color: ${Cores.laranja};
    }
`

export const BotaoLixeira = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    cursor: pointer;
    right: 8px;
    bottom: 8px;

    img {
        width: 16px;
        height: 16px;
    }
`