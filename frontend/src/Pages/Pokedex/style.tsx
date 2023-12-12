import styled from "styled-components";
import { global } from "../../global";

export const PokedexDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    
    align-items: center;

    background-color: black;
`;

/*----------------------------------------------------------------------------*/

export const PokeNav = styled.form `
    display: inline-flex;
    width: 96%;
    height: fit-content;

    align-items: center;
    justify-content: space-between;

    padding: 1% 2%;

    background-color: ${global.cores.amarelo};
`;

export const SelectionDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
`;

export const SelectionTitle = styled.h2 `
    margin: 0 0 5% 0;
    font-family: ${global.fonts.quantico};
    font-size: 24px;
`;

export const SelectionOptions = styled.div `
    display: grid;
    grid-template-columns: 0.33fr 0.33fr 0.33fr;
    width: 100%;
    height: 100%;
`;

/*----------------------------------------------------------------------------*/

export const CardsDiv = styled.div `
    display: grid;
    grid-template-columns: 0.18fr 0.18fr 0.18fr 0.18fr 0.18fr;
    grid-row-gap: 10%;
    grid-template-rows: max-content;
    width: 100%;

    justify-content: space-evenly;

    overflow-y: auto;

    padding: 2% 0 2% 0;
    background-color: black;
`;