import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { consultar } from '../../Functions/consultas';
import { Pokemon } from '../../Components/PokeCard';

import { CardsDiv, FecharConsulta, PokeNav, PokedexDiv, SelecaoConsulta } from "./style";
import Tipos from '../../Components/Tipos';
import PokeCard from '../../Components/PokeCard';

import Seta from '../../Assets/Pokedex/setinha.svg';
import Filtro from '../../Components/Filtro';

export type PokeForm = {
    consulta: number;
    formTipos: Array<string>;
};

export default function Pokedex() {
    const [resposta, setResposta] = useState<Array<Pokemon>>([]);
    const [consultaSelec, setConsulta] = useState<number>(0);

    const { handleSubmit, setValue, getValues } = useForm<PokeForm>({
        defaultValues:{
            consulta: 0,
            formTipos: []
        }
    });

    const switchConsulta = (valor: number) => {
        setConsulta(valor);
        setValue('consulta', valor);
    }

    useEffect(() => {
        async function consultaInicial(){    
            const retorno = await consultar(getValues());
            if(retorno) setResposta(retorno);
        }
        consultaInicial();
    }, []);


    let aberto = true;
    const Menu = () => {
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
                console.log(dados);
                const retorno = await consultar(dados);
                if(retorno) {
                    console.log(retorno);
                    setResposta(retorno);
                    Menu();
                }
            })}>
                <SelecaoConsulta>
                    <Tipos getValor={getValues} setValor={setValue}
                    display={consultaSelec}/>

                    <Filtro getValor={getValues} setValor={switchConsulta}/>
                </SelecaoConsulta>

                <div onClick={Menu} style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                    <FecharConsulta id='fecharConsulta' src={Seta}/>
                </div>
            </PokeNav>

            <CardsDiv>
                {
                    resposta.map((poke: Pokemon, indice: number) => {
                        return <PokeCard id={poke.id} nome={poke.nome}
                        foto={poke.foto} tipos={poke.tipos} key={indice}/>;
                    })
                }
            </CardsDiv>
        </PokedexDiv>
    );
}