const { Sequelize } = require("sequelize");
const db = require('../database/db');

db.sync();

module.exports = associadoModel = db.define('Associado', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(100)
    },
    cpf: {
        type: Sequelize.STRING(11)
    },
    dataNasc: {
        type: Sequelize.DATE
    },
    salario: {
        type: Sequelize.FLOAT
    },
    endividamento: {
        type: Sequelize.FLOAT
    }
});