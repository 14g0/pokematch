import { CardImg, PokeCardDiv, PokeName, TipoIcon, TiposCardDiv } from "./style";

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

export default function PokeCard({tipos, nome, foto}: Pokemon) {
    return (
        <PokeCardDiv>
            <CardImg src={foto}/>
            <PokeName>{nome}</PokeName>
            <TiposCardDiv>
                {tipos.map((tipo, indice) => {
                    switch(tipo) {
                        case 'normal': return <TipoIcon key={indice} src={normal}/>
                        case 'fighting': return <TipoIcon key={indice} src={lutador}/>
                        case 'flying': return <TipoIcon key={indice} src={voador}/>
                        case 'poison': return <TipoIcon key={indice} src={veneno}/>
                        case 'ground': return <TipoIcon key={indice} src={terra}/>
                        case 'rock': return <TipoIcon key={indice} src={pedra}/>
                        case 'bug': return <TipoIcon key={indice} src={inseto}/>
                        case 'ghost': return <TipoIcon key={indice} src={fantasma}/>
                        case 'steel': return <TipoIcon key={indice} src={ferro}/>
                        case 'fire': return <TipoIcon key={indice} src={fogo}/>
                        case 'water': return <TipoIcon key={indice} src={agua}/>
                        case 'grass': return <TipoIcon key={indice} src={grama}/>
                        case 'electric': return <TipoIcon key={indice} src={eletrico}/>
                        case 'psychic': return <TipoIcon key={indice} src={psiquico}/>
                        case 'ice': return <TipoIcon key={indice} src={gelo}/>
                        case 'dragon': return <TipoIcon key={indice} src={dragao}/>
                        case 'dark': return <TipoIcon key={indice} src={sombrio}/>
                        case 'fairy': return <TipoIcon key={indice} src={fada}/>
                        default: return <TipoIcon key={indice}/>
                    }
                })}
            </TiposCardDiv>
        </PokeCardDiv>
    );
}