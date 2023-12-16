const Tipo = require('../../models/Tipo');

const seedTipo = async() => {
    const TipoArray = [];

    const tipos = (await (await fetch('https://pokeapi.co/api/v2/type')).json()).results;

    tipos.forEach((tipo, indice) => {
        TipoArray.push({
            id: indice,
            nome: tipo.name
        })
    });

    console.log()
    
    try {
        await Tipo.sync({ force: true });
        await Tipo.bulkCreate(TipoArray);
    }
    catch(erro) { console.log(erro); }
    
}

module.exports = seedTipo;
