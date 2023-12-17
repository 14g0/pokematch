const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Caracteristicas = sequelize.define('Caracteristicas', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    peso: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    altura: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, { freezeTableName: true });

Caracteristicas.associate = function (models){
    Caracteristicas.belongsToMany(models.Pokemon, {
        through: 'Tem',
        as: 'caracteristicas',
        foreignKey: 'CaracPokemonID',
    });
};

module.exports = Caracteristicas;
