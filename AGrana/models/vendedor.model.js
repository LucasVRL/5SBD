const { Sequelize } = require("sequelize");
const db = require('../database/db');

db.sync();

module.exports = vendedorModel = db.define('Vendedor', {
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
    }
});