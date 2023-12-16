const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database(
    './database.sqlite', sqlite.OPEN_READWRITE,
    (err) => { if(err) console.log(err); }
);

db.serialize(() => {
    db.each(`select pokemon.nome, pokemon.pokedex from pokemon where pokemon.nome like 'b%'`, (err, row) => {
        if(err) console.log(err);

        console.log(row);
    });
});

db.close();