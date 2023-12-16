const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Skill = sequelize.define('Skill', {
    skillId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Skill.associate = function (models){
    Skill.belongsToMany(models.Pokemon, {
        through: 'Aprende',
        as: 'skill',
        foreignKey: 'SkillPokemonID'
    });
};

module.exports = Skill;