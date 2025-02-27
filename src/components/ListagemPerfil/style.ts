import styled from "styled-components";
import { BotaoSobre } from "../Restaurante/style";

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