const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Tipo = sequelize.define('Tipo', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Tipo.associate = function (models){
    Tipo.belongsToMany(models.Pokemon, {
        through: 'Possui',
        as: 'tipo',
        foreignKey: 'TipoPokemonID'
    });
};


// exportando Model
module.exports = Tipo;
