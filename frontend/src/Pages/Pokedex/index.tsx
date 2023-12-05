import { useForm } from 'react-hook-form';
import SelectionInput from "../../Components/SelectionButton";
import { PokeNav, PokedexDiv, SearchSelection, SelectionDiv } from "./style";

type Tipos = {
    agua: boolean;
    fogo: boolean;
    planta: boolean;
    pedra: boolean;
    psiq: boolean;
    dragao: boolean;
    fada: boolean;
    eletrico: boolean;
    fantasma: boolean;
}

export default function Pokedex() {

    const { register, handleSubmit, setValue, getValues } = useForm<Tipos>({
        defaultValues:{
            agua: false,
            fogo: false,
            planta: false,
            pedra: false,
            psiq: false,
            dragao: false,
            fada: false,
            eletrico: false,
            fantasma: false,
    }});

    return (
        <PokedexDiv>
            <PokeNav>
                <SelectionDiv>

                    <SearchSelection>
                        <div>
                            <SelectionInput id="fogo" texto="Fogo"
                            {...register('fogo', { required: true })}/>
                        </div>
                        <div>
                            <SelectionInput id="agua" texto="Agua"/>
                        </div>
                    </SearchSelection>
                </SelectionDiv>
            </PokeNav>
        </PokedexDiv>
    );
}