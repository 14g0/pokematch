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
    grid-template-columns: 0.2fr 0.4fr auto;
    width: 100%;
    height: 50px;

    padding: 1% 2%;

    align-items: center;

    background-color: ${global.cores.amarelo};
`;

export const NavText = styled.p `
`;

export const NavOptionsDiv = styled.div `
    display: flex;
    width: 100%;

    justify-content: space-between;
`;

export const NavButton = styled.button `
    width: 10%;

    text-align: center;
    font-family: ${global.fonts.quantico};
`;