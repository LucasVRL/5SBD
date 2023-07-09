const Sequelize = require('sequelize');
const db = require('../database/db');

class EmprestimoService{

    constructor(){}

    async getByVendedor(entity, id){
        return await entity.model.findAll({
            where: {
                idVendedor: id
            }
        });
    }

    async getByAssociado(entity, id){
        return await entity.model.findAll({
            where: {
                idAssociado: id
            }
        });
    }
}

module.exports = EmprestimoService;