const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Possui = sequelize.define('Possui', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    PokemonTipoID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    TipoPokemonID: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { freezeTableName: true });


module.exports = Possui;
