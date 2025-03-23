import styled from "styled-components";
import { Cores } from "../../style";
import { Button } from "../Modal/style";


export const Titulo = styled.div`
    color: ${Cores.fundoFooter};
    font-weight: bold;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0;
    margin-bottom: 16px;
`

export const FormCheckout = styled.form`
    ${Button} {
        width: 100%;
        text-align: center;
        margin: 0;
        margin-top: 12px;
    }

    > input {
        background-color: ${Cores.fundoFooter};
        color: ${Cores.cinza};
        margin: 8px 0px;
        width: 100%;
        height: 32px;
        font-size: 14px;
        border: none;
        font-weight: bold;

        &.error {
            border: 2px solid yellow;
        }
    }
`

export const Row = styled.div`
    display: flex;

    input {
        background-color: ${Cores.fundoFooter};
        color: ${Cores.cinza};
        margin: 8px 0px;
        margin-right: 34px;
        height: 32px;
        font-size: 14px;
        border: none;
        font-weight: bold;

        &.error {
            border: 2px solid yellow;
        }
    }
`

export const FormLabel = styled.label`
        color: ${Cores.fundoFooter};
        font-weight: bold;
        font-size: 14px;
        line-height: 100%;
        letter-spacing: 0;
`