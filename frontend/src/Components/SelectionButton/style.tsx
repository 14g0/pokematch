import styled from "styled-components";
import { global } from "../../global";

export const SelecButtonDiv = styled.div `
    display: flex;
    align-items: center;
`;

export const SelecInput = styled.input `
    display: flex;
    
    ::before {
        background-color: red;
    }
`;

export const SelecLabel = styled.label `
    display: flex;
    font-family: ${global.fonts.quantico};
    font-weight: 600;
    font-size: 14px;
    color: ${global.cores.azul};
`;