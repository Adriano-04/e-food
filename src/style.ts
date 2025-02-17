import styled, { createGlobalStyle } from "styled-components";

export const Cores = {
    laranja: '#E66767',
    branco: '#fff',
    fundo: '#FFF8F2',
    fundoFooter: '#FFEBD9'
}

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        list-style: none;
    }

    body {
        background-color: ${Cores.fundo};
    }
`

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
`