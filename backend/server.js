require('./src/config/dotenv')();
require('./src/config/sequelize');

const express = require('express');
const cors = require('cors');

const port = process.env.PORT;
const sqlite = require('sqlite3').verbose();
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const db = new sqlite.Database(
    './database.sqlite', sqlite.OPEN_READWRITE,
    (err) => { if(err) console.log(err, '\x1b[31m\nNão foi possível abrir o banco de dados\x1b[m'); }
);

/*----------------------------------------------------------------------------*/

app.get('/', (req, res) => {
    res.send('OI OI')
})

app.post('/pokeform', (req, res) => {
    const tipos = [].concat(req.body.tipos);

    let tiposConsulta = '';
    tipos.forEach((tipo, indice) => {
        if(indice != (tipos.length - 1)) {
            tiposConsulta = tiposConsulta.concat(`tipo.nome='${tipo}' OR `);
        }
        else tiposConsulta = tiposConsulta.concat(`tipo.nome='${tipo}'`);
    });
    if(tiposConsulta == '') {
        res.status(200).json({});
        return;
    }

    const consulta = `
        SELECT pokemon.nome as nome, pokemon.foto as foto, tipo.nome as tipo
        FROM (pokemon INNER JOIN possui on possui.PokemonTipoID = pokemon.pokedex)
            INNER JOIN tipo ON possui.TipoPokemonID = tipo.id
        WHERE ${tiposConsulta}
        GROUP BY pokemon.nome
    `;

    try {
        console.log(consulta);
        db.serialize(() => {
            db.all(consulta, (err, row) => {
                if(err) console.log(err);
                console.log(row);
            });
            res.status(200).json(row)
        });
    }
    catch(erro) {
        console.log(erro);
        res.status(500).json({erro});
    }
});

app.listen(port, () => {
    console.log(`\x1b[32m${process.env.APP_NAME} app listening at http://localhost:${port}\x1b[m`);
});