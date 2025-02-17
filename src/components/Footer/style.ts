import styled from "styled-components";
import { Cores } from "../../style";
import { Logo } from "../Hero/style";

export const FooterContainer = styled.footer`
    height: 300px;
    background-color: ${Cores.fundoFooter};
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Links = styled.nav`
    margin-top: 32px;

    a {
        margin-right: 8px;
    }
`

export const P = styled.p`
    font-size: 10px;
    color: ${Cores.laranja};
    text-align: center;
    margin-top: 80px;
`

export const LogoFooter = styled(Logo)`
margin: 0;
`