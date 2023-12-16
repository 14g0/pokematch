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
    foto: {
        type: DataTypes.BLOB,
        allowNull: false
    }
});

Pokemon.associate = function (models){
    Pokemon.belongsToMany(models.Tipo, {
        through: 'Possui',
        as: 'pokemonTipo',
        foreignKey: 'PokemonTipoID'
    });

    Pokemon.belongsToMany(models.Skill, {
        through: 'Aprende',
        as: 'pokemonSkill',
        foreignKey: 'PokemonSkillID'
    });

    Pokemon.belongsToMany(models.Caracteristicas, {
        through: 'Tem',
        as: 'pokemonCarac',
        foreignKey: 'PokemonCaracID'
    });
};

module.exports = Pokemon;