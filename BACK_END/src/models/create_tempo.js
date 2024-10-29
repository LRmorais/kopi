const Sequelize = require('sequelize');
const sequelize = require('../database/database.js');
var ip = require('ip');

const Tempo = sequelize.define("tempo",{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    time: {
        allowNull: true,
        type: Sequelize.INTEGER,
        defaultValue: 10
    },
    ativo: {
        allowNull: true,
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    ip: {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: ip.address()
    }
});

module.exports = Tempo