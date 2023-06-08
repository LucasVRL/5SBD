const { Sequelize } = require("sequelize");
const mysql = require('mysql2/promise');
const db = require('../database/db');
const model = require('../model/carros.model')(db)

const connect = async () => {
    await db.sync();
}

connect();

module.exports = {
    getCarros: async () => {
        return await model.findAll();
    },

    getCarroById: async (idCarro) => {
        return await model.findAll({
            where: {
                id: idCarro
            }
        });
    },

    createCarro: async (modelo, marca, ano, cor) => {
        return await model.create({ modelo, marca, ano, cor });
    },

    updateCarro: async (idCarro, modelo, marca, ano, cor) => {
        return await model.update(
            { modelo, marca, ano, cor },
            {
                where: {
                    id: idCarro
                }
            }
        )
    },

    deleteCarro: async (idCarro) => {
        return await model.destroy({
            where: {
                id: idCarro
            }
        })
    }
    
}


 