require('../../config/dotenv')();
require('../../config/sequelize');

const seedTipo = require('./TipoSeeder');
const seedPokemon = require('./PokemonSeeder');

(async () => {
    try {
        await seedTipo();
        await seedPokemon();
    }
    catch (err) { console.log(err); }
})();
