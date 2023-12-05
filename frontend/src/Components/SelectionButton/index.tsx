import { SelecButtonDiv, SelecInput, SelecLabel } from "./style";

type InputAtt = {
    id: string;
    texto: string;
}

export default function SelectionInput({id, texto}: InputAtt) {
    return (
        <SelecButtonDiv>
            <SelecInput type="radio" id={`${id}`} />
            <SelecLabel htmlFor="agua">{texto}</SelecLabel>
        </SelecButtonDiv>
    );
}