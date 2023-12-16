import { CardImg, PokeCardDiv, PokeName, TipoIcon, TiposDiv } from "./style";

import agua from '../../Assets/Tipos/tipoAgua.png';
import fogo from '../../Assets/Tipos/tipoFogo.png';
import ferro from '../../Assets/Tipos/tipoFerro.png';
import fada from '../../Assets/Tipos/tipoFada.png';
import grama from '../../Assets/Tipos/tipoGrama.png';
import dragao from '../../Assets/Tipos/tipoDragao.png';
import sombrio from '../../Assets/Tipos/tipoSombrio.png';
import terra from '../../Assets/Tipos/tipoTerra.png';
import eletrico from '../../Assets/Tipos/tipoEletrico.png';
import fantasma from '../../Assets/Tipos/tipoFantasma.png';
import gelo from '../../Assets/Tipos/tipoGelo.png';
import inseto from '../../Assets/Tipos/tipoInseto.png';
import lutador from '../../Assets/Tipos/tipoLutador.png';
import normal from '../../Assets/Tipos/tipoNormal.png';
import pedra from '../../Assets/Tipos/tipoPedra.png';
import psiquico from '../../Assets/Tipos/tipoPsiquico.png';
import veneno from '../../Assets/Tipos/tipoVeneno.png';
import voador from '../../Assets/Tipos/tipoVoador.png';

type Pokemon = {
    tipos: Array<string>;
    nome: string;
    foto: string;
};

export default function PokeCard(
    {tipos, nome, foto}: Pokemon
) {
    return (
        <PokeCardDiv>
            <CardImg src={foto}/>
            <PokeName>{nome}</PokeName>
            <TiposDiv>
                {tipos.map((tipo) => {
                    switch(tipo) {
                        case 'normal': return <TipoIcon src={normal}/>
                        case 'fighting': return <TipoIcon src={lutador}/>
                        case 'flying': return <TipoIcon src={voador}/>
                        case 'poison': return <TipoIcon src={veneno}/>
                        case 'ground': return <TipoIcon src={terra}/>
                        case 'rock': return <TipoIcon src={pedra}/>
                        case 'bug': return <TipoIcon src={inseto}/>
                        case 'ghost': return <TipoIcon src={fantasma}/>
                        case 'steel': return <TipoIcon src={ferro}/>
                        case 'fire': return <TipoIcon src={fogo}/>
                        case 'water': return <TipoIcon src={agua}/>
                        case 'grass': return <TipoIcon src={grama}/>
                        case 'electric': return <TipoIcon src={eletrico}/>
                        case 'psychic': return <TipoIcon src={psiquico}/>
                        case 'ice': return <TipoIcon src={gelo}/>
                        case 'dragon': return <TipoIcon src={dragao}/>
                        case 'dark': return <TipoIcon src={sombrio}/>
                        case 'fairy': return <TipoIcon src={fada}/>
                        default: return <TipoIcon/>
                    }
                })}
            </TiposDiv>
        </PokeCardDiv>
    );
}