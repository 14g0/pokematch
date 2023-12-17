import { useForm } from 'react-hook-form';

import { CardsDiv, ConsultasDiv, FecharConsulta, PokeNav, PokedexDiv, SelecaoConsulta, SelectionDiv,
    SelectionTitle, SubmitButton, TiposConsulta } from "./style";
import Tipos from '../../Components/Tipos';
import PokeCard from '../../Components/PokeCard';

import Seta from '../../Assets/Pokedex/setinha.svg';

type PokeForm = {
    formTipo: number;
    tipos: Array<string>;
};

export default function Pokedex() {

    const { handleSubmit, setValue, getValues } = useForm<PokeForm>({
        defaultValues:{
            formTipo: 0,
            tipos: []
        }
    });

    let aberto = true;
    const abrirMenu = () => {
        const seta = document.getElementById('fecharConsulta');
        const pokenav = document.getElementById('pokenav');

        if(seta && pokenav) {
            if(aberto) {
                seta.style.transform = 'rotate(0deg)';
                pokenav.style.transform = 'translateY(-85%)';
                aberto = false;
            }
            else {
                seta.style.transform = 'rotate(180deg)';
                pokenav.style.transform = 'translateY(0)';
                aberto = true;
            }
        }
    };

    return (
        <PokedexDiv>
            <PokeNav id='pokenav' onSubmit={handleSubmit(async dados => {
                const formDados = JSON.stringify(dados);
                console.log(formDados);
                await fetch('http://localhost:3333/pokeform', {
                    method: 'post',
                    body: formDados,
                    mode: 'cors',
                    headers: new Headers({
                    'Content-Type': 'application/json'
                    })
                });
            })}>
                <SelecaoConsulta>
                    <SelectionDiv>
                        <SelectionTitle>Tipos</SelectionTitle>
                        <Tipos getValor={getValues} setValor={setValue}/>
                    </SelectionDiv>
                    <ConsultasDiv>
                        <TiposConsulta>
                        </TiposConsulta>
                        <SubmitButton type='submit'>Filtrar</SubmitButton>
                    </ConsultasDiv>
                </SelecaoConsulta>

                <div onClick={abrirMenu} style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                    <FecharConsulta id='fecharConsulta' src={Seta}/>
                </div>
            </PokeNav>

            <CardsDiv>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
                <PokeCard nome='Blastoise' tipos={['water', 'grass']} foto='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'/>
            </CardsDiv>
        </PokedexDiv>
    );
}