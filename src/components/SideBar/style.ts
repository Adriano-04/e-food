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