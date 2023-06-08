const { Sequelize } = require("sequelize");

module.exports = model = db => db.define('Carros', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    modelo: {
        type: Sequelize.STRING(20)
    },
    marca: {
        type: Sequelize.STRING(20)
    },
    ano: {
        type: Sequelize.INTEGER
    },
    cor: {
        type: Sequelize.STRING(20)
    }
},{
    timestamps: false
});
