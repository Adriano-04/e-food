import styled from "styled-components";
import { Cores } from "../../style";

export const Card = styled.div`
    background-color: ${Cores.laranja};
    color: ${Cores.fundoFooter};
    height: 370px;
    width: 320px;
    flex-direction: column;

    img {
        width: 300px;
        height: 170px;
        display: block;
        margin: 0 auto;
        padding-top: 8px;
    }

    h3 {
        margin-top: 4px;
        margin-left: 8px;
    }
`

export const Button = styled.div`
    cursor: pointer;
    text-align: center;
    width: 95%;
    margin: 8px;
    background-color: ${Cores.fundoFooter};
    color: ${Cores.laranja};
    padding: 4px;
    font-weight: bold;
`