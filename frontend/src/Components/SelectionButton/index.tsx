import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { SelecButtonDiv, SelecInput, SelecLabel } from "./style";

type InputAtt = {
    id: string;
    texto: string;
    funcao: Function;
}

export default function SelectionInput({id, texto, funcao}: InputAtt) {

    const { register } = useForm();

    useEffect(() => {
        const esteInput = document.getElementById(`${id}`) as HTMLInputElement;
        if(esteInput) {
            esteInput.addEventListener('click', () => funcao(esteInput.checked));
        }
    }, []);

    return (
        <SelecButtonDiv>
            <SelecInput type="checkbox" id={id}
            {...register(id, { required: true })}/>
            <SelecLabel htmlFor={id}>{texto}</SelecLabel>
        </SelecButtonDiv>
    );
}