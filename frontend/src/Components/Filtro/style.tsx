import { global } from "../../global";
import styled from "styled-components";

export const FiltroDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;

    align-items: center;
    justify-content: space-between;
`;

export const FiltroSubmit = styled.button `
    width: 20%;
    height: 20%;

    font-family: ${global.fonts.quantico};
    font-size: 1.3vw;
    font-weight: 500;

    border-radius: 0.5vw;

    color: white;
    background-color: ${global.cores.azul};
`;

/*----------------------------------------------------------------------------*/

export const SelecButtonDiv = styled.div `
    display: flex;
    flex-direction: column;
    height: 100%;

    align-items: center;
    justify-content: space-evenly;


    .option {
        display: inline-flex;
        width: 100%;
        align-items: center;

        cursor: pointer;
        opacity: 1;
        transition: opacity 250ms ease-in-out;
        div {
            margin-right: 10px;
        }
        &.faded {
            opacity: 1;
        }
    }

    .pokeball {
        height: 15px;
        width: 15px;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        border: 2px solid #000;
        transform-origin: center bottom;

        .base {
            background: #000;
            height: 80%;
            width: 80%;
            padding: 10%;
        }

        .upper-half {
            position: absolute;
            background: #f64c4c;
            height: 42%;
            width: 100%;
        }

        .lower-half {
            bottom: 0;
            position: absolute;
            background: white;
            height: 42%;
            width: 100%;
        }

        .inner-circle {
            border-radius: 50%;
            height: 20%;
            width: 20%;
            background: white;
            position: absolute;
            top: 50%;
            left: 50%;
            border: 2px solid black;
            transform: translate(-50%, -50%);
        }
    }

    .indicator-inner {
        border-radius: 50%;
        height: 20%;
        width: 20%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
    }

    .indicator {
        border-radius: 50%;
        height: 80%;
        width: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #f64c4c;
        background: -webkit-radial-gradient(center, #f64c4c, #ff514f00);
        background: -moz-radial-gradient(center, #f64c4c, #ff514f00);
        background: radial-gradient(ellipse at center, #f64c4c, #ff514f00);

        opacity: 0;
    }

    @keyframes blink {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 0;
        }
    }

    @keyframes shake {
        0% {
            transform: rotate(5deg);
        }
        5% {
            transform: rotate(-5deg);
        }
        10% {
            transform: rotate(5deg);
        }
        15% {
            transform: rotate(-5deg);
        }
        20% {
            transform: rotate(5deg);
        }
        25% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }

    .selected {
        animation: shake 1.5s ease-in infinite;
        .indicator {
            opacity: 1;
            animation: blink 1s ease-in-out infinite;
        }
        .indicator-inner {
            background: #f64c4c;
        }
    }
`;

export const SelecButtonTitle = styled.p `
    font-family: ${global.fonts.quantico};
    font-size: 1.6vw;
    font-weight: 600;

    color: black;
`;