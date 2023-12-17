require('../../config/dotenv')();
require('../../config/sequelize');

const seedTipo = require('./TipoSeeder');
const seedPokemon = require('./PokemonSeeder');
const seedPossui = require('./PossuiSeeder');

(async () => {
    try {
        await seedTipo();
        await seedPokemon();
        await seedPossui();
    }
    catch (err) { console.log(err); }
})();
