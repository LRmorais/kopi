const Sequelize = require('sequelize');
const sequelize = require('../database/database.js');

const Atividades = sequelize.define("atividades",{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    gabarito: {
        allowNull: false,
        type: Sequelize.ENUM({
        values: ['A','B','C','D']
        })
    },
    corretas: {
        allowNull: true,
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

module.exports = Atividades