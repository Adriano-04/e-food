import styled from "styled-components";
import { Cores } from "../../style";

export const Banner = styled.div`
    width: 100%;
    background-repeat: no-repeat;
    height: 384px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
`
export const Logo = styled.img`
    margin-top: 64px;
    width: 124px;
    height: 60px;
`

export const Titulo = styled.h1`
    font-size: 36px;
    line-height: 42px;
    color: ${Cores.laranja};
    text-align: center;
    margin-top: 120px;
`