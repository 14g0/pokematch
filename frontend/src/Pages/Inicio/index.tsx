import { Ash, BlurDiv, Charizard, Comecar, FlorestaBg, FogoDiv, InicioDiv, 
    Magma, NomeDiv, NomeInput, NomeLabel, OutroMagma } from "./style";

import bgFloresta from '../../Assets/Inicio/BgFloresta.svg';
import pkmLogo from '../../Assets/Inicio/pkmLogo.svg';
import ash from '../../Assets/Inicio/Ash.svg';
import magma from '../../Assets/Inicio/magma.svg'
import charizard from '../../Assets/Inicio/charizard.svg';

export default function Inicio() {
    return (
        <InicioDiv>
            <FlorestaBg src={bgFloresta}/>

            <BlurDiv>
                <img src={pkmLogo} style={{width: '87.58%'}}
                alt="Logo do Pokematch"/>

                <NomeDiv>
                    <NomeLabel>Digite seu nome:</NomeLabel>
                    <NomeInput name="nome" type="text"/>
                </NomeDiv>

                <Comecar type="button" onClick={() => console.log('abacate')}>COMEÇAR</Comecar>
            </BlurDiv>

            <FogoDiv>
                <Ash src={ash}/>
                <Charizard src={charizard}/>
                <Magma src={magma}/>
                <OutroMagma src={magma}/>
            </FogoDiv>
        </InicioDiv>
    );
}