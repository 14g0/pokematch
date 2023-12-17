import { SelecButtonDiv, SelecInput, SelecLabel, TiposDiv } from "./style";

type InputAtt = {
    id: string;
    texto: string;
    funcao: Function;
};

type TiposFunctions = {
    getValor: Function;
    setValor: Function;
}

export default function Tipos({getValor, setValor}: TiposFunctions) {

    const gerenciarTipos = (valor: string) => {
        const selecionados: Array<string> = getValor('tipos');
        
        if(selecionados.includes(valor)) {
            const novosTipos = selecionados.filter((tipo: string) => tipo !== valor);
            setValor('tipos', novosTipos);
        }
        else {
            const novosTipos = selecionados.concat(valor);
            setValor('tipos', novosTipos);
        }
    }

    return (
        <TiposDiv>
            <SelectionInput id="normal" texto="Normal"
            funcao={(valor: string) => { gerenciarTipos(valor); }}/>

            <SelectionInput id="fighting" texto="Lutador"
            funcao={(valor: string) => { gerenciarTipos(valor); }}/>

            <SelectionInput id="flying" texto="Voador"
            funcao={(valor: string) => { gerenciarTipos(valor); }}/>

            <SelectionInput id="poison" texto="Veneno"
            funcao={(valor: string) => { gerenciarTipos(valor); }}/>

            <SelectionInput id="ground" texto="Terra"
            funcao={(valor: string) => { gerenciarTipos(valor); }}/>

            <SelectionInput id="rock" texto="Pedra"
            funcao={(valor: string) => { gerenciarTipos(valor); }}/>

            <SelectionInput id="bug" texto="Inseto"
            funcao={(valor: string) => { gerenciarTipos(valor); }}/>

            <SelectionInput id="ghost" texto="Fantasma"
            funcao={(valor: string) => { gerenciarTipos(valor); }}/>

            <SelectionInput id="steel" texto="Ferro"
            funcao={(valor: string) => { gerenciarTipos(valor); }}/>

            <SelectionInput id="fire" texto="Fogo"
            funcao={(valor: string) => { gerenciarTipos(valor); }}/>

            <SelectionInput id="water" texto="Água"
            funcao={(valor: string) => { gerenciarTipos(valor); }}/>

            <SelectionInput id="grass" texto="Grama"
            funcao={(valor: string) => { gerenciarTipos(valor); }}/>

            <SelectionInput id="electric" texto="Elétrico"
            funcao={(valor: string) => { gerenciarTipos(valor); }}/>

            <SelectionInput id="psychic" texto="Psíquico"
            funcao={(valor: string) => { gerenciarTipos(valor); }}/>

            <SelectionInput id="ice" texto="Gelo"
            funcao={(valor: string) => { gerenciarTipos(valor); }}/>

            <SelectionInput id="dragon" texto="Dragão"
            funcao={(valor: string) => { gerenciarTipos(valor); }}/>

            <SelectionInput id="dark" texto="Sombrio"
            funcao={(valor: string) => { gerenciarTipos(valor); }}/>

            <SelectionInput id="fairy" texto="Fada"
            funcao={(valor: string) => { gerenciarTipos(valor); }}/>
        </TiposDiv>
    );
}

function SelectionInput({ id, texto, funcao }: InputAtt) {

    return (
        <SelecButtonDiv>
            <SelecInput type="checkbox" id={id} onClick={() => funcao(id)}/>
            <SelecLabel htmlFor={id}>{texto}</SelecLabel>
        </SelecButtonDiv>
    );
}