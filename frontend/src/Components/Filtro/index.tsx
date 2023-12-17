import { SelectionTitle } from "../../Pages/Pokedex/style";
import { FiltroDiv, FiltroSubmit, SelecButtonDiv, SelecButtonTitle } from "./style";

type InputAtt = {
    id: string;
    texto: string;
};

type Props = {
    getValor: Function;
    setValor: Function;
}

export default function Filtro({getValor, setValor}: Props) {
    const textos = ['Tipos', 'Nome', 'Movimento', 'Caracteristicas', 'Abacate'];
    const options = ["poke1", "poke2", "poke3", "poke4", "poke5"];

    options.forEach((option, indice) => {
        const opcao =  document.getElementById(option);
        if(opcao) {
            opcao.addEventListener("click", function() {
                const pokeballs = document.getElementsByClassName("pokeball");

                for (var i = 0; i < pokeballs.length; i++) {
                    const pokeball = pokeballs[i];

                    if(pokeball.parentElement) {
                        if (pokeball.parentElement.id !== option) {
                            pokeball.classList.remove("selected");
                            pokeball.parentElement.classList.add("faded");
                        }
                        else {
                            pokeball.classList.add("selected");
                            pokeball.parentElement.classList.remove("faded");
                            console.log(indice);
                            setValor(indice);
                        }
                    }
                }
            });
        }
    });

    const primeira = document.getElementById('poke1');
    primeira?.click();

    return (
        <FiltroDiv>
            <SelectionTitle>Consultas</SelectionTitle>
            <div style={{display: 'inline-flex', width: '100%', justifyContent: 'space-between'}}>
                <SelecButtonDiv>
                    {
                        options.map((pokebola, indice) => {
                            return <SelectionInput id={pokebola} texto={textos[indice]}
                            key={indice}/>
                        })
                    }
                </SelecButtonDiv>
                <FiltroSubmit>Filtro</FiltroSubmit>
            </div>
        </FiltroDiv>
    );
}

function SelectionInput({ id, texto}: InputAtt) {
    return (
        <div className="option faded" id={id}>
            <div className="pokeball unselected">
            <div className="upper-half"> </div>
            <div className="lower-half"> </div>
            <div className="base"> </div>
            <div className="inner-circle"> </div>
            <div className="indicator visible"> </div>
            <div className="indicator-inner"> </div>
            </div>
            <SelecButtonTitle>{texto}</SelecButtonTitle>
        </div>
    );
}