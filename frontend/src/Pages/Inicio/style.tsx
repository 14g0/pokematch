import styled from "styled-components";
import { global } from "../../global";

export const InicioDiv = styled.div `
    display: flex;
    width: fill;
    height: 100vh;

    overflow: hidden;

    align-items: center;
`;

export const FlorestaBg = styled.img `
    display: display;
    width: 100%;
    height: 100vh;
    object-fit: cover;

    position: absolute;
    z-index: -1;

    filter: opacity(50%) blur(3px);
`;

/*----------------------------------------------------------------------------*/

export const BlurDiv = styled.form `
    display: grid;
    grid-template-rows: 50% 30% 20%;

    width: 37.76%;
    height: 65.681vh;

    margin: 0 0 0 3.33vw;
    padding: 7.9vh 0;

    justify-items: center;

    border-radius: 2.604vw;
    outline: 0.528vw solid  rgba(0, 0, 0, 0.1);
    outline-offset: -0.528vw;

    backdrop-filter: blur(30px);
    background-color: rgba(255, 255, 255, 0.2);
`;

/*----------------------------------------------------------------------------*/

export const NomeDiv = styled.div `
    display: flex;
    flex-direction: column;
`;

export const NomeLabel = styled.label `
    font-family: ${global.fonts.quantico};
    font-size: 1.66vw;
    font-weight: 400;
    color: ${global.cores.amarelo};
`;

export const NomeInput = styled.input `
    width: 24vw;
    height: 9.259vh;

    padding: 0 0 0 1vw;

    border-left: 1.4vw solid ${global.cores.amarelo};
    border-radius: 1.3vw;

    font-family: ${global.fonts.quantico};
    font-size: 1.66vw;

    background-color: white;
`;

export const Comecar = styled.button `
    display: flex;
    width: 17.86vw;
    height: 10vh;

    align-items: center;
    justify-content: center;

    font-family: ${global.fonts.lato};
    font-size: 1.66vw;
    font-weight: 700;

    border: 0.468vw solid white;
    border-radius: 0.83vw;

    color: ${global.cores.azul};
    background-color: ${global.cores.amarelo};

    &:hover {
        background-color: ${global.cores.azul};
        border-color: ${global.cores.amarelo};
        color: white;
    }
`;

/*----------------------------------------------------------------------------*/

export const FogoDiv = styled.div `
    display: flex;
    width: 50%;
    height: 100%;

    position: relative;
    right: 0;
`;

export const Ash = styled.img `
    width: 45vw;

    position: absolute;
    bottom: 0;
    left: -2vw;
    z-index: 1;

    filter: drop-shadow(10px 4px 15px rgba(0, 0, 0, 0.5));
`;

export const Charizard = styled.img `
    width: 15vw;

    position: absolute;
    right: 0;
    z-index: 2;
    transform: rotate(-30deg);

    filter: drop-shadow(10px 4px 15px rgba(0, 0, 0, 0.5));
`;

export const Magma = styled.img `
    width: 50vw;
    position: absolute;
    left: 5vw;
    bottom: -1vh;
    z-index: 0;
    filter: blur(1px);
`;

export const OutroMagma = styled.img `
    width: 70vw;
    position: absolute;
    bottom: 0;
    left: 10vw;
    z-index: -1;
    filter: blur(1px);
`;