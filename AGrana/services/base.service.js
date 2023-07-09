const Sequelize = require('sequelize');
const db = require('../database/db');

class BaseService{

    constructor(){}

    async getAll(entity){
        return await entity.model.findAll();
    }

    async getById(entity, id){
        return await entity.model.findAll({
            where: {
                id: id
            }
        });
    }

    async create(entity, obj){
        return await entity.model.create(obj);
    }

    async update(entity, id, obj){
        return await entity.model.update(
            obj,
            {
                where: {
                    id: id
                }
            }
        )
    }

    async delete(entity, id){
        return await entity.model.destroy({
            where: {
                id: id
            }
        })
    }

}

module.exports = BaseService;