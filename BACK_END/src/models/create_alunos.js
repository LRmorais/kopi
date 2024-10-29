const Sequelize = require('sequelize');

//busco os dados de configuracao do bd
const sequelize = require('../database/database.js');

//o define cria a tabela no bd
//o nome da tabela é invoice
//defino os atributos

const Alunos = sequelize.define("alunos", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: [3,100]
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            isEmail: true
        }
    },
    senha: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
            len: [3,10]
        }
    },
    acertos: {
        allowNull: true,
        type: Sequelize.INTEGER,
        timestamps: false,
    },
    createdAt: {
        type: Sequelize.DATE,
        timestamps: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        timestamps: false
      }
});
module.exports = Alunos;


