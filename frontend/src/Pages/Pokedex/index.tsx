import { useForm } from 'react-hook-form';
import { CardsDiv, PokeNav, PokedexDiv, SelectionDiv, SelectionOptions, SelectionTitle } from "./style";
import Tipos from '../../Components/Tipos';
import PokeCard from '../../Components/PokeCard';

type Consulta = {
    normal: boolean; fogo: boolean;
    agua: boolean; grama: boolean;
    voador: boolean; lutador: boolean;
    veneno: boolean; eletrico: boolean;
    terra: boolean; pedra: boolean;
    psiquico: boolean; gelo: boolean;
    inseto: boolean; fantasma: boolean;
    ferro: boolean; dragao: boolean;
    sombrio: boolean; fada: boolean;

    consulta: number;
}

export default function Pokedex() {

    useForm<Consulta>({
        defaultValues:{
            normal: false, fogo: false,
            agua: false, grama: false,
            voador: false, lutador: false,
            veneno: false, eletrico: false,
            terra: false, pedra: false,
            psiquico: false, gelo: false,
            inseto: false, fantasma: false,
            ferro: false, dragao: false,
            sombrio: false, fada: false
    }});

    return (
        <PokedexDiv>
            <PokeNav>
                <SelectionDiv>
                    <SelectionTitle>Tipos</SelectionTitle>
                    <SelectionOptions>
                        <Tipos/>
                    </SelectionOptions>
                </SelectionDiv>

                
            </PokeNav>

            <CardsDiv>
                <PokeCard nome='Blastoise' tipos={['agua']} geracao='generation-i' movimento={['bomba']}/>
                <PokeCard nome='Blastoise' tipos={['agua']} geracao='generation-i' movimento={['bomba']}/>
                <PokeCard nome='Blastoise' tipos={['agua']} geracao='generation-i' movimento={['bomba']}/>
                <PokeCard nome='Blastoise' tipos={['agua']} geracao='generation-i' movimento={['bomba']}/>
                <PokeCard nome='Blastoise' tipos={['agua']} geracao='generation-i' movimento={['bomba']}/>
                <PokeCard nome='Blastoise' tipos={['agua']} geracao='generation-i' movimento={['bomba']}/>
                <PokeCard nome='Blastoise' tipos={['agua']} geracao='generation-i' movimento={['bomba']}/>
                <PokeCard nome='Blastoise' tipos={['agua']} geracao='generation-i' movimento={['bomba']}/>
                <PokeCard nome='Blastoise' tipos={['agua']} geracao='generation-i' movimento={['bomba']}/>
                <PokeCard nome='Blastoise' tipos={['agua']} geracao='generation-i' movimento={['bomba']}/>
                <PokeCard nome='Blastoise' tipos={['agua']} geracao='generation-i' movimento={['bomba']}/>
                <PokeCard nome='Blastoise' tipos={['agua']} geracao='generation-i' movimento={['bomba']}/>
                <PokeCard nome='Blastoise' tipos={['agua']} geracao='generation-i' movimento={['bomba']}/>
                <PokeCard nome='Blastoise' tipos={['agua']} geracao='generation-i' movimento={['bomba']}/>
                <PokeCard nome='Blastoise' tipos={['agua']} geracao='generation-i' movimento={['bomba']}/>
                <PokeCard nome='Blastoise' tipos={['agua']} geracao='generation-i' movimento={['bomba']}/>
                <PokeCard nome='Blastoise' tipos={['agua']} geracao='generation-i' movimento={['bomba']}/>
                <PokeCard nome='Blastoise' tipos={['agua']} geracao='generation-i' movimento={['bomba']}/>
            </CardsDiv>
        </PokedexDiv>
    );
}