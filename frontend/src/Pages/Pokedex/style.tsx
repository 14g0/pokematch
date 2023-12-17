import styled from "styled-components";
import { global } from "../../global";

export const PokedexDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    position: relative;
    
    align-items: center;

    background-color: black;
`;

/*----------------------------------------------------------------------------*/

export const PokeNav = styled.form `
    display: flex;
    flex-direction: column;
    width: 96%;
    height: 40%;

    padding: 1% 2%;

    position: absolute;
    
    align-items: center;
    justify-content: space-between;


    background-color: ${global.cores.amarelo};

    transition: transform 0.3s ease;

    .envioDesativado {
        background-color: ${global.cores.desativado};
        transform: none;
    }
`;

export const SelecaoConsulta = styled.div `
    display: inline-flex;
    width: 100%;
    height: 85%;
`;

export const SelectionDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    height: 100%;
`;

export const SelectionTitle = styled.h2 `
    margin: 0 0 5% 0;
    font-family: ${global.fonts.quantico};
    font-size: 24px;
`;

export const FecharConsulta = styled.img `
    transition: transform 0.3s ease;
    transform: rotate(180deg);
`;

/*----------------------------------------------------------------------------*/

export const ConsultasDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 100%;

    align-items: center;
    justify-content: space-between;
`;

export const TiposConsulta = styled.div `

`;

export const SubmitButton = styled.button `
    width: 20%;
    height: 20%;

    font-family: ${global.fonts.quantico};
    font-size: 1.7vw;
    font-weight: 500;

    border-radius: 0.5vw;

    color: white;
    background-color: ${global.cores.azul};
`;

/*----------------------------------------------------------------------------*/

export const CardsDiv = styled.div `
    display: grid;
    grid-template-columns: 0.18fr 0.18fr 0.18fr 0.18fr 0.18fr;
    grid-row-gap: 40px;
    width: 100%;
    height: 100%;

    margin: 3% 0 0 0;

    justify-content: space-evenly;

    overflow-y: auto;

    padding: 2% 0 2% 0;
    background-color: black;
`;
