// const PokemonSeeder = require('../../models/Pokemon');

const seedPokemon = async() => {
    const PokemonArray = [];

    const pokemons = (await(await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1292')).json()).results;

    pokemons.forEach((pokemon, indice) => {
        PokemonArray.push({
            id: indice,
            nome: pokemon.name,
            foto
        })
    })

}

module.exports = seedPokemon;