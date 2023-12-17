import styled from "styled-components";
import { global } from "../../global";

export const PokeCardDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    align-items: center;

    border: solid 2px white;
    border-radius: 10px;
    background-color: #8c8c8c;
`;

export const PokeCardId = styled.p `
    margin: 3vh 0;
    font-family: ${global.fonts.quantico};
    font-size: 1.5vw;
    font-weight: 700;
    color: white;
`;

export const CardImg = styled.img `
    min-height: 25vh;
    max-height: 30vh;
`;

export const PokeName = styled.h3 `
    width: 100%;
    font-family: ${global.fonts.quantico};
    font-weight: 600;
    color: white;
    text-align: center;
`;

export const TiposCardDiv = styled.div `
    display: inline-flex;
    width: 60%;
    justify-content: space-evenly;
    align-items: center;
    margin: 5% 0;
`;

export const TipoIcon = styled.img `
    width: 30%;
`;