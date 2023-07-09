const { Sequelize } = require("sequelize");
const db = require('../database/db');

db.sync();

module.exports = emprestimoModel = db.define('Emprestimo', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idVendedor: {
        type: Sequelize.INTEGER
    },
    idAssociado: {
        type: Sequelize.INTEGER
    },
    valor: {
        type: Sequelize.FLOAT
    },
    valorParcela: {
        type: Sequelize.FLOAT
    },
    parcelas: {
        type: Sequelize.INTEGER
    },
    parcelasPagas: {
        type: Sequelize.INTEGER
    },
    taxa: {
        type: Sequelize.FLOAT
    },
    status: {
        type: Sequelize.STRING(20)
    }
});