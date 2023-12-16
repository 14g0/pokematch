const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database(
    './database.sqlite', sqlite.OPEN_READWRITE,
    (err) => { if(err) console.log(err); }
);

db.serialize(() => {
    db.each('select tipo.nome from tipo', (err, row) => {
        if(err) console.log(err);

        console.log(row.nome);
    });
});

db.close();