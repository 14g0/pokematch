import { NavButton, NavOptionsDiv, PokeNav, PokedexDiv } from "./style";

export default function Pokedex() {
    return (
        <PokedexDiv>
            <PokeNav>
                <p>Tipos de Pesquisa</p>
                <NavOptionsDiv>
                    <NavButton>Movimento</NavButton>
                    <NavButton>Tipo</NavButton>
                    <NavButton></NavButton>
                    <NavButton>Teste de Personalidade</NavButton>
                </NavOptionsDiv>
            </PokeNav>
        </PokedexDiv>
    );
}