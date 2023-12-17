require('./src/config/dotenv')();
require('./src/config/sequelize');


const express = require('express');
const cors = require('cors');
const consultas = require('./consultas');

const port = process.env.PORT;
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/*----------------------------------------------------------------------------*/

app.get('/', (req, res) => {
    res.send('OI OI')
})

/*----------------------------------------------------------------------------*/

app.post('/pokeform', async (req, res) => {
    console.log(req.body);
    switch(req.body.consulta) {
        case 0: consultas.consultaUm(req.body, res); break;
        case 1: consultas.consultaUm(req.body, res); break;
        case 2: consultas.consultaUm(req.body, res); break;
        case 3: consultas.consultaUm(req.body, res); break;
        case 4: consultas.consultaUm(req.body, res); break;
    }
});

/*----------------------------------------------------------------------------*/

app.listen(port, () => {
    console.log(`\x1b[32m${process.env.APP_NAME} app listening at http://localhost:${port}\x1b[m`);
});