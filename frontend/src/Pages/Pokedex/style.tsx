import styled from "styled-components";
import { global } from "../../global";

export const PokedexDiv = styled.div `
    display: flex;
    width: 100%;
    height: 100%;

    overflow-x: hidden;

    background-color: white;
`;

/*----------------------------------------------------------------------------*/

export const PokeNav = styled.nav `
    display: grid;
    grid-template-columns: 0.5fr auto;
    width: 100%;
    height: 50%;

    padding: 1% 2% 4% 2%;

    align-items: center;

    background-color: ${global.cores.amarelo};
`;

export const SelectionDiv = styled.form `
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
`;

export const SearchSelection = styled.div `
    display: flex;
    width: 100%;
    height: 100%;

    justify-content: space-between;
`;

export const SearchOption = styled.div `
    display: flex;
    flex-direction: column;

    justify-content: space-evenly;
`;