const sqlite = require('sqlite3').verbose();

async function consultaUm(form, res) {
    const db = new sqlite.Database(
        './database.sqlite', sqlite.OPEN_READWRITE,
        (err) => { if(err) console.log(err, '\x1b[31m\nNão foi possível abrir o banco de dados\x1b[m'); }
    );
    const tipos = [].concat(form.formTipos);

    let tiposConsulta = '';
    let consulta = `
        SELECT pokemon.pokedex as id, pokemon.nome as nome, pokemon.foto as foto, GROUP_CONCAT(tipo.nome) as tipos
        FROM (pokemon INNER JOIN possui on possui.PokemonTipoID = pokemon.pokedex)
        INNER JOIN tipo ON possui.TipoPokemonID = tipo.id
        GROUP BY pokemon.nome
        ORDER BY pokemon.pokedex ASC
    `;
    
    if(tipos.length == 0) {
        try {
            console.log(consulta)
            const pokemons = await new Promise((resolve) => {
                let pokeArray = [];
    
                db.serialize(async() => {
                    db.each(consulta, (err, row) => {
                        if(err) console.log(err);
    
                        pokeArray.push({
                            id: row.id,
                            nome: row.nome,
                            foto: row.foto,
                            tipos: row.tipos.split(',')
                        })
                    }, () => {
                        resolve(pokeArray);
                    });
                });
            });
    
            res.status(200).json(pokemons);
        }
        catch(erro) {
            console.log(erro);
            res.status(500).json({erro});
        }
        return;
    }


    tipos.forEach((tipo, indice) => {
        if(indice != (tipos.length - 1)) {
            tiposConsulta = tiposConsulta.concat(`tipo.nome='${tipo}' OR `);
        }
        else tiposConsulta = tiposConsulta.concat(`tipo.nome='${tipo}'`);
    });

    consulta = `
        SELECT pokemon.pokedex as id, pokemon.nome as nome, pokemon.foto as foto, GROUP_CONCAT(tipo.nome) as tipos
        FROM (pokemon INNER JOIN possui on possui.PokemonTipoID = pokemon.pokedex)
        INNER JOIN tipo ON possui.TipoPokemonID = tipo.id
        WHERE ${tiposConsulta}
        GROUP BY pokemon.nome
        ORDER BY pokemon.pokedex ASC
    `;
    
    try {
        console.log(consulta);

        const pokemons = await new Promise((resolve) => {
            let pokeArray = [];

            db.serialize(async() => {
                db.each(consulta, (err, row) => {
                    if(err) console.log(err);

                    pokeArray.push({
                        id: row.id,
                        nome: row.nome,
                        foto: row.foto,
                        tipos: row.tipos.split(',')
                    })
                }, () => {
                    resolve(pokeArray);
                });
            });
        });

        res.status(200).json(pokemons);
    }
    catch(erro) {
        console.log(erro);
        res.status(500).json({erro});
    }
}

module.exports = {consultaUm};