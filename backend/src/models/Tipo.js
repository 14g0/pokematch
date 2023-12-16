const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Tipo = sequelize.define('Tipo', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
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

module.exports = Tipo;
