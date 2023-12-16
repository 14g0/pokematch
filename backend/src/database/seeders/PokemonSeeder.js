const Pokemon = require('../../models/Pokemon');

const seedPokemon = async() => {
    const PokemonArray = [];

    const pokemons = (await(await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1292')).json()).results;

    pokemons.forEach(async (pokemon, indice) => {
        PokemonArray.push({
            id: indice,
            nome: pokemon.name,
            foto: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${indice + 1}.png`
        })
    })

    try {
        await Pokemon.sync({ force: true });
        await Pokemon.bulkCreate(PokemonArray);
    }
    catch(erro) { console.log(erro); }
}

module.exports = seedPokemon;