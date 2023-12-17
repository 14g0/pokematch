import { PokeForm } from "../Pages/Pokedex";

export const consultar = async(formulario: PokeForm) => {
    const botaoFiltrar = document.getElementById('filtrar');
    botaoFiltrar?.toggleAttribute('disabled', true);
    botaoFiltrar?.classList.add('envioDesativado');

    const retorno = await fetch('http://localhost:3333/pokeform', {
        method: 'post',
        body: JSON.stringify(formulario),
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(response => {
        botaoFiltrar?.toggleAttribute('disabled', false);
        botaoFiltrar?.classList.remove('envioDesativado');

        // Importante checar porque a fetch só é rejeitada em caso de erro de rede
        if(!response.ok) return "Erro ao acessar o servidor";

        return response.json();
    });

    return retorno;
}