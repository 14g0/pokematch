const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Pokemon = sequelize.define('Pokemon', {
    pokedex: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    geracao: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Pokemon.associate = function (models){
    Pokemon.belongsToMany(models.Tipo, {
        through: 'Possui',
        as: 'pokemon',
        foreignKey: 'PokemonTipoID'
    });
};


// exportando Model
module.exports = Pokemon;