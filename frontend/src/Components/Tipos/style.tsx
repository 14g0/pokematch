import styled from "styled-components";
import { global } from "../../global";

export const TiposDiv = styled.div `
    display: grid;
    grid-template-columns: auto auto auto;
    width: 100%;
    height: 100%;

    align-items: center;
`;

export const SelecButtonDiv = styled.div `
    display: flex;
    align-items: center;
`;

export const SelecInput = styled.input `
    display: flex;
`;

export const SelecLabel = styled.label `
    display: flex;

    margin: 0 0 0 0.3vw;

    font-family: ${global.fonts.quantico};
    font-weight: 600;
    font-size: 1.05vw;
    color: ${global.cores.azul};
`;