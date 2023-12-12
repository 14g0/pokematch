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
    geracao: string;
    movimento: Array<string>;
};

export default function PokeCard(
    {tipos, nome, geracao, movimento}: Pokemon
) {
    return (
        <PokeCardDiv>
            <CardImg src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"/>
            <PokeName>{nome}</PokeName>
            <TiposDiv>
                {tipos.map((tipo) => {
                    switch(tipo) {
                        case 'agua': return <TipoIcon src={agua}/>
                        case 'pedra': return <TipoIcon src={pedra}/>
                        case 'fantasma': return <TipoIcon src={fantasma}/>
                        case 'eletrico': return <TipoIcon src={eletrico}/>
                        case 'terra': return <TipoIcon src={terra}/>
                        case 'ferro': return <TipoIcon src={ferro}/>
                        case 'psiquico': return <TipoIcon src={psiquico}/>
                        case 'sombrio': return <TipoIcon src={sombrio}/>
                        case 'dragao': return <TipoIcon src={dragao}/>
                        case 'lutador': return <TipoIcon src={lutador}/>
                        case 'veneno': return <TipoIcon src={veneno}/>
                        case 'fogo': return <TipoIcon src={fogo}/>
                        case 'voador': return <TipoIcon src={voador}/>
                        case 'gelo': return <TipoIcon src={gelo}/>
                        case 'inseto': return <TipoIcon src={inseto}/>
                        case 'fada': return <TipoIcon src={fada}/>
                        case 'grama': return <TipoIcon src={grama}/>
                        case 'normal': return <TipoIcon src={normal}/>
                        default: return <TipoIcon/>
                    }
                })}
            </TiposDiv>
        </PokeCardDiv>
    );
}