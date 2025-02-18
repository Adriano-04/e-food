import styled from "styled-components";

export const Lista = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 48px;

    li {
        margin: 0 auto;
        width: 90%;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
` 