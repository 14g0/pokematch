import styled from "styled-components";
import { global } from "../../global";

export const PokeCardDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;

    align-items: center;

    border: solid 2px white;
    border-radius: 10px;
    background-color: #9c9c9c;
`;

export const CardImg = styled.img `
    width: 90%;
`;

export const PokeName = styled.h3 `
    width: 100%;
    font-family: ${global.fonts.quantico};
    font-size: 20px;
    font-weight: 600;
    color: white;
    text-align: center;
`;

export const TiposDiv = styled.div `
    display: inline-flex;
    width: 50%;
    justify-content: space-evenly;
    align-items: center;
    margin: 5% 0;
`;

export const TipoIcon = styled.img `
    width: 50%;
`;