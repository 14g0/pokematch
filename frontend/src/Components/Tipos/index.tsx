import { useForm } from "react-hook-form";
import SelectionInput from "../SelectionButton";

export default function Tipos() {

    const { setValue } = useForm();

    return (
        <>
            <SelectionInput id="normal" texto="Normal"
            funcao={(valor: boolean) => { setValue('normal', valor); }}/>

            <SelectionInput id="fogo" texto="Fogo"
            funcao={(valor: boolean) => { setValue('fogo', valor); }}/>

            <SelectionInput id="agua" texto="Água"
            funcao={(valor: boolean) => { setValue('agua', valor); }}/>

            <SelectionInput id="grama" texto="Grama"
            funcao={(valor: boolean) => { setValue('grama', valor); }}/>

            <SelectionInput id="voador" texto="Voador"
            funcao={(valor: boolean) => { setValue('voador', valor); }}/>

            <SelectionInput id="lutador" texto="Lutador"
            funcao={(valor: boolean) => { setValue('lutador', valor); }}/>

            <SelectionInput id="veneno" texto="Veneno"
            funcao={(valor: boolean) => { setValue('veneno', valor); }}/>

            <SelectionInput id="eletrico" texto="Elétrico"
            funcao={(valor: boolean) => { setValue('eletrico', valor); }}/>

            <SelectionInput id="terra" texto="Terra"
            funcao={(valor: boolean) => { setValue('terra', valor); }}/>

            <SelectionInput id="pedra" texto="Pedra"
            funcao={(valor: boolean) => { setValue('pedra', valor); }}/>

            <SelectionInput id="psiquico" texto="Psíquico"
            funcao={(valor: boolean) => { setValue('psiquico', valor); }}/>

            <SelectionInput id="gelo" texto="Gelo"
            funcao={(valor: boolean) => { setValue('gelo', valor); }}/>

            <SelectionInput id="inseto" texto="Inseto"
            funcao={(valor: boolean) => { setValue('inseto', valor); }}/>

            <SelectionInput id="fantasma" texto="Fantasma"
            funcao={(valor: boolean) => { setValue('fantasma', valor); }}/>

            <SelectionInput id="ferro" texto="Ferro"
            funcao={(valor: boolean) => { setValue('ferro', valor); }}/>

            <SelectionInput id="dragao" texto="Dragão"
            funcao={(valor: boolean) => { setValue('dragao', valor); }}/>

            <SelectionInput id="sombrio" texto="Sombrio"
            funcao={(valor: boolean) => { setValue('sombrio', valor); }}/>

            <SelectionInput id="fada" texto="Fada"
            funcao={(valor: boolean) => { setValue('fada', valor); }}/>
        </>
    );
}