const Possui = require('../../models/Possui');

const seedPossui = async() => {
    const PossuiArray = [];

    for(let i=1 ; i<19 ; i += 1) {
        const pokemons = (await(await fetch(`https://pokeapi.co/api/v2/type/${i}`)).json()).pokemon;

        pokemons.forEach(async (pokemon, indice) => {
            const pokeid = pokemon.pokemon.url.split('/')[6];

            PossuiArray.push({
                PokemonTipoID: pokeid,
                TipoPokemonID: i
            });
        });
    }

    try {
        await Possui.sync({ force: true });
        await Possui.bulkCreate(PossuiArray);
    }
    catch(erro) { console.log(erro); }
}

module.exports = seedPossui;