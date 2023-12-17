const Pokemon = require('../../models/Pokemon');

const seedPokemon = async() => {
    const PokemonArray = [];

    const pokemons = (await(await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1292')).json()).results;

    pokemons.forEach(async (pokemon) => {
        const pokeid = pokemon.url.split('/')[6];

        PokemonArray.push({
            pokedex: pokeid,
            nome: pokemon.name,
            foto: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeid}.png`
        });
    });

    try {
        await Pokemon.sync({ force: true });
        await Pokemon.bulkCreate(PokemonArray);
    }
    catch(erro) { console.log(erro); }
}

module.exports = seedPokemon;